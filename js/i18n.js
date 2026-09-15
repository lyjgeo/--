/* ============================================================
   DRONEX V2 — i18n.js
   极简 i18n：根据 URL ?lang= 或 localStorage 切换语言
   ============================================================ */

(function(){
  'use strict';

  const SUPPORTED = ['en','ar'];
  const DEFAULT = 'en';
  const STORAGE_KEY = 'dronex-lang';

  function getLang(){
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get('lang');
    if(fromUrl && SUPPORTED.includes(fromUrl)) return fromUrl;
    const fromStore = localStorage.getItem(STORAGE_KEY);
    if(fromStore && SUPPORTED.includes(fromStore)) return fromStore;
    return DEFAULT;
  }

  async function loadTranslations(lang){
    const res = await fetch(`./translations/${lang}.json`);
    if(!res.ok) throw new Error('Translation load failed: '+lang);
    return res.json();
  }

  function applyTranslations(dict){
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      const val = dict[key];
      if(typeof val === 'string'){
        el.textContent = val;
      }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
      const key = el.getAttribute('data-i18n-placeholder');
      const val = dict[key];
      if(typeof val === 'string') el.setAttribute('placeholder',val);
    });
  }

  function setDir(lang){
    const html = document.documentElement;
    if(lang === 'ar'){
      html.setAttribute('dir','rtl');
      html.setAttribute('lang','ar');
    }else{
      html.setAttribute('dir','ltr');
      html.setAttribute('lang','en');
    }
  }

  function updateSwitch(lang){
    document.querySelectorAll('.lang-switch a').forEach(a=>{
      a.classList.toggle('active',a.getAttribute('data-lang')===lang);
    });
  }

  async function init(){
    const lang = getLang();
    setDir(lang);
    updateSwitch(lang);
    if(lang === DEFAULT){
      return;
    }
    try{
      const dict = await loadTranslations(lang);
      applyTranslations(dict);
    }catch(err){
      console.warn(err);
    }
  }

  document.addEventListener('DOMContentLoaded',()=>{
    init();
    document.querySelectorAll('.lang-switch a').forEach(a=>{
      a.addEventListener('click',e=>{
        e.preventDefault();
        const lang = a.getAttribute('data-lang');
        localStorage.setItem(STORAGE_KEY,lang);
        const url = new URL(window.location.href);
        url.searchParams.set('lang',lang);
        window.location.href = url.toString();
      });
    });
  });

  window.DRONEX_i18n = { getLang, setDir };
})();