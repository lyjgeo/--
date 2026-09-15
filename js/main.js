/* ============================================================
   DRONEX V2 — main.js
   导航高亮、平滑滚动、表单基本验证、占位符替换
   ============================================================ */

(function(){
  'use strict';

  /* 占位符替换（data-config 属性） */
  const cfg = window.DRONEX_CONFIG || {};
  document.querySelectorAll('[data-config]').forEach(el=>{
    const key = el.getAttribute('data-config');
    const val = cfg[key];
    if(!val || val === key) return;
    if(key === 'WHATSAPP_NUMBER'){
      el.setAttribute('href','https://wa.me/'+val.replace(/[^0-9]/g,''));
    }else if(key === 'TELEGRAM_HANDLE'){
      el.setAttribute('href','https://t.me/'+val.replace(/^@/,''));
    }else if(key === 'PHONE_NUMBER'){
      el.setAttribute('href','tel:'+val.replace(/[^0-9+]/g,''));
    }else if(key === 'SALES_EMAIL'){
      el.setAttribute('href','mailto:'+val);
      if(el.textContent.trim() === 'SALES_EMAIL') el.textContent = val;
    }else if(key === 'COMPANY_LOCATION'){
      if(el.textContent.trim() === 'COMPANY_LOCATION') el.textContent = val;
    }
  });

  /* 导航高亮 */
  const links = [...document.querySelectorAll('.nav-links a[href^="#"]')];
  const sections = [...document.querySelectorAll('main section[id]')];
  if(links.length && sections.length){
    const observer = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id));
        }
      });
    },{rootMargin:'-35% 0px -55% 0px'});
    sections.forEach(s=>observer.observe(s));
  }

  /* 表单基本验证（无后端，仅前端提示） */
  const form = document.querySelector('#quote-form');
  if(form){
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const required = form.querySelectorAll('[required]');
      let ok = true;
      required.forEach(f=>{
        if(!f.value.trim()){ok=false;f.style.borderColor='#ff5a5a';}
        else{f.style.borderColor='';}
      });
      if(!ok){
        alert('Please fill in all required fields.');
        return;
      }
      alert('Thank you. This is a demo form — please connect it to your backend or use the WhatsApp / Email links.');
    });
  }

  /* 平滑滚动补偿固定导航高度 */
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const id = a.getAttribute('href');
      if(id.length > 1){
        const el = document.querySelector(id);
        if(el){
          e.preventDefault();
          const top = el.getBoundingClientRect().top + window.scrollY - 74;
          window.scrollTo({top,behavior:'smooth'});
        }
      }
    });
  });

})();