/** The SHA-1 digest is a range-lookup format, never a password-storage scheme. */
export async function passwordHash(value, subtle = crypto.subtle) {
  const bytes = new TextEncoder().encode(value);
  try {
    const digest = new Uint8Array(await subtle.digest('SHA-1', bytes));
    try {return Array.from(digest,b=>b.toString(16).padStart(2,'0')).join('').toUpperCase();}
    finally {digest.fill(0);}
  } finally {bytes.fill(0);}
}

export function rangeMatch(body, suffix) {
  if (!/^[A-F0-9]{35}$/.test(suffix)) throw new Error('Invalid lookup');
  let found = false, rows = 0;
  for (const line of body.split(/\r?\n/)) {
    if (!line.trim()) continue;
    const match = /^([A-F0-9]{35}):([0-9]+)$/i.exec(line.trim());
    if (!match) throw new Error('Invalid response');
    rows++;
    if (match[1].toUpperCase() === suffix && /[1-9]/.test(match[2])) found = true;
  }
  if (!rows) throw new Error('Empty response');
  return found;
}

function setupChecker(){
const form=document.getElementById('checker'),input=document.getElementById('password'),submit=document.getElementById('submit'),clear=document.getElementById('clear'),result=document.getElementById('result'),title=document.getElementById('result-title'),copy=document.getElementById('result-copy');
let generation=0,controller=null,busy=false;
function show(heading,text,focus=false){title.textContent=heading;copy.textContent=text;result.hidden=false;if(focus){result.focus({preventScroll:true});result.scrollIntoView({block:'start',inline:'nearest',behavior:'instant'});}}
function cancel(){generation++;controller?.abort();controller=null;busy=false;submit.disabled=false;form.removeAttribute('aria-busy');result.hidden=true;title.textContent='';copy.textContent='';}
function clearAll(){cancel();input.value='';}
input.addEventListener('input',cancel);
clear.addEventListener('click',()=>{clearAll();input.focus();});
window.addEventListener('pagehide',clearAll);
document.addEventListener('visibilitychange',()=>{if(document.hidden)clearAll();});
form.addEventListener('submit',async event=>{
  event.preventDefault();if(busy)return;if(!input.value){input.reportValidity();return;}
  const request=++generation;busy=true;submit.disabled=true;form.setAttribute('aria-busy','true');controller=new AbortController();const currentController=controller;const timeout=setTimeout(()=>currentController.abort(),12000);
  let hash='',suffix='';show('Checking the password value','The lookup is in progress. Your input has been cleared.');
  try {
    const hashing=passwordHash(input.value);input.value='';hash=await hashing;if(request!==generation)return;suffix=hash.slice(5);const prefix=hash.slice(0,5);hash='';
    const response=await fetch('https://api.pwnedpasswords.com/range/'+prefix,{method:'GET',headers:{'Add-Padding':'true'},credentials:'omit',cache:'no-store',referrerPolicy:'no-referrer',redirect:'error',signal:currentController.signal});
    if(!response.ok)throw new Error('Lookup unavailable');const body=await response.text();if(request!==generation)return;const matched=rangeMatch(body,suffix);suffix='';
    if(matched)show('Found in known exposed-password data','This password value appears in HIBP’s data. That does not establish that your account was compromised. Change it through the service’s trusted settings and replace it wherever you reused it.',true);
    else show('No match in the returned data','HIBP did not return a match for this password value. That is not proof of safety. Use a unique password and review the account’s other protections.',true);
  }catch{if(request===generation)show('The check could not complete','No result was established. The service may be unavailable or the connection blocked. You can enter the password again and retry.',true);}
  finally{hash='';suffix='';clearTimeout(timeout);if(request===generation){busy=false;controller=null;submit.disabled=false;form.removeAttribute('aria-busy');}}
});
if(window.top!==window){show('Open the checker as a separate page','The password field is disabled when this page is embedded. Open the password-check page directly to use it.');return;}
if(window.isSecureContext&&crypto.subtle){input.disabled=false;submit.disabled=false;document.getElementById('startup').hidden=true;}else show('This browser cannot run the check','Open this page over HTTPS in a browser that supports local cryptographic operations. No lookup was sent.');

}
if(typeof document!=='undefined')setupChecker();
