// Simple RU/KZ language toggle for static site
(function(){
  const btnRu = document.getElementById('btn-ru');
  const btnKz = document.getElementById('btn-kz');
  function setLang(lang){
    document.querySelectorAll('[data-ru]').forEach(el=>{
      el.textContent = lang==='ru' ? el.getAttribute('data-ru') : el.getAttribute('data-kz') || el.getAttribute('data-ru');
    });
    btnRu.classList.toggle('active', lang==='ru');
    btnKz.classList.toggle('active', lang==='kz');
    localStorage.setItem('toty_lang', lang);
  }
  btnRu.addEventListener('click', ()=>setLang('ru'));
  btnKz.addEventListener('click', ()=>setLang('kz'));
  const saved = localStorage.getItem('toty_lang') || 'ru';
  setLang(saved);
})();
