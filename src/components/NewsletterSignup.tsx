import {useId,useState} from 'react';
import {Link} from 'react-router-dom';
import Turnstile from './Turnstile';
import {PORTAL_URL} from './LeadForm';
import './NewsletterSignup.css';
// Deliberate release hold. Turning on a build variable cannot publish signup.
export const NEWSLETTER_UI_ENABLED = false;
const CONSENT_VERSION='blog-news-2026-10-v1';
export default function NewsletterSignup({enabled=NEWSLETTER_UI_ENABLED}:{enabled?:boolean}) {
  const id=useId();const [token,setToken]=useState('');const [busy,setBusy]=useState(false);const [message,setMessage]=useState('');const [reset,setReset]=useState(0);
  if(!enabled)return null;
  return <section className="newsletter-signup" aria-labelledby={`${id}-heading`}>
    <h2 id={`${id}-heading`}>Get new Blog posts by email</h2>
    <p>Cybersecurity and AI updates from Helm. Confirm your address before emails begin.</p>
    <form onSubmit={async event=>{event.preventDefault();if(busy)return;const data=new FormData(event.currentTarget);setBusy(true);
      try {const res=await fetch(new URL('/api/newsletter/subscribe',PORTAL_URL),{method:'POST',credentials:'omit',headers:{'Content-Type':'application/json'},signal:AbortSignal.timeout(12000),
        body:JSON.stringify({email:data.get('email'),consent:data.get('consent')==='on',consentVersion:CONSENT_VERSION,source:'footer',website:data.get('website'),turnstileToken:token})});
        setMessage(res.status===202?'If your address is eligible, check your inbox to confirm your subscription.':'Newsletter signup is unavailable. Please try again later.');
      }catch{setMessage('Newsletter signup is unavailable. Please try again later.');}finally{setBusy(false);setToken('');setReset(x=>x+1);}}}>
      <label htmlFor={`${id}-email`}>Email</label>
      <input id={`${id}-email`} type="email" name="email" required autoComplete="email" maxLength={254}/>
      <label className="newsletter-choice"><input type="checkbox" name="consent" required/> <span>Email me new Helm Blog posts about cybersecurity and AI. I can unsubscribe at any time. <Link to="/privacy/">Privacy policy</Link>.</span></label>
      <input name="website" className="newsletter-trap" aria-hidden="true" tabIndex={-1} autoComplete="off"/>
      <Turnstile action="newsletter_signup" onToken={setToken} resetKey={reset}/>
      <button className="newsletter-button" type="submit" disabled={busy||!token}>{busy?'Requesting…':'Email me new posts'}</button>
      <p role="status">{message}</p>
    </form>
  </section>;
}
