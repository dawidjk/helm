window.helmTrackingActive=true;
// SDK unload hooks must not send another event after withdrawal.
const originalFetch=window.fetch.bind(window);
window.fetch=(...args)=>window.helmTrackingActive?originalFetch(...args):Promise.reject(new DOMException('Optional measurement stopped','AbortError'));
const originalBeacon=navigator.sendBeacon.bind(navigator);
navigator.sendBeacon=(...args)=>window.helmTrackingActive?originalBeacon(...args):false;
const originalSend=XMLHttpRequest.prototype.send;
XMLHttpRequest.prototype.send=function(...args){if(window.helmTrackingActive)return originalSend.apply(this,args);this.abort();};
let token='',category='',id='',initialized=false;
const validPath = value => typeof value==='string' && value.startsWith('/') && !value.startsWith('//') && value.length<=200 && !/[?#\r\n]/.test(value);
function script(src){const s=document.createElement('script');s.async=true;s.referrerPolicy='no-referrer';s.src=src;document.head.appendChild(s);}
window.addEventListener('message',event=>{
  if(!window.helmTrackingActive || window.parent===window || event.source!==window.parent || event.origin!==location.origin || !event.data || typeof event.data!=='object')return;
  const m=event.data;
  if(!initialized && m.type==='helm:tracking-init' && typeof m.token==='string' && /^[0-9a-f-]{36}$/i.test(m.token) && ['analytics','advertising'].includes(m.category)){
    if(m.category==='analytics' ? !/^G-[A-Z0-9]+$/.test(m.id) : !/^\d+$/.test(m.id))return;
    initialized=true;token=m.token;category=m.category;id=m.id;
    if(validPath(m.path))history.replaceState(null,'',m.path);
    if(typeof m.title==='string'&&m.title.length<=200)document.title=m.title;
    if(category==='analytics'){
      window.dataLayer=[];window.gtag=function(){window.dataLayer.push(arguments)};
      window.gtag('consent','default',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
      window.gtag('js',new Date());
      window.gtag('config',id,{send_page_view:false,allow_google_signals:false,allow_ad_personalization_signals:false,page_referrer:'',page_location:location.href,page_title:document.title});
      script('https://www.googletagmanager.com/gtag/js?id='+id);
    }else{
      window.fbq=function(){if(window.fbq.callMethod)window.fbq.callMethod(...arguments);else window.fbq.queue.push([...arguments])};
      window.fbq.queue=[];window.fbq.loaded=true;window.fbq.version='2.0';window._fbq=window.fbq;
      window.fbq('consent','grant');window.fbq('set','autoConfig',false,id);window.fbq('init',id);
      script('https://connect.facebook.net/en_US/fbevents.js');
    }
    return;
  }
  if(!initialized || m.token!==token || m.type!=='helm:tracking-event' || !['page_view','generate_lead'].includes(m.name) || !validPath(m.path))return;
  if(category==='analytics'){
    const params={page_location:location.origin+m.path,page_referrer:''};
    if(typeof m.title==='string'&&m.title.length<=200)params.page_title=m.title;
    if(m.name==='page_view')window.gtag('set',params);
    if(m.name==='generate_lead'){
      if(typeof m.id!=='string'||!/^[0-9a-f-]{36}$/i.test(m.id))return;
      Object.assign(params,{lead_source:'website_contact',form_id:'helm_contact',event_id:m.id});
    }
    window.gtag('event',m.name,params);
  }else{
    // Only the current path, without query strings or form fields.
    history.replaceState(null,'',m.path);
    if(typeof m.title==='string'&&m.title.length<=200)document.title=m.title;
    window.fbq('track',m.name==='page_view'?'PageView':'Lead');
  }
});
