
const nav=document.querySelector('[data-nav]');
const menuBtn=document.querySelector('[data-menu]');
const links=document.querySelectorAll('.nav-links a');
function onScroll(){ if(window.scrollY>20) nav.classList.add('scrolled'); else nav.classList.remove('scrolled'); }
onScroll(); window.addEventListener('scroll',onScroll,{passive:true});
if(menuBtn){ menuBtn.addEventListener('click',()=>{ const open=nav.classList.toggle('open'); menuBtn.setAttribute('aria-expanded',open?'true':'false'); }); }
links.forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open'); menuBtn?.setAttribute('aria-expanded','false')}));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const root=document.querySelector('[data-lightbox-root]');
if(root){
  const img=root.querySelector('[data-lightbox-img]');
  document.querySelectorAll('[data-lightbox]').forEach(btn=>btn.addEventListener('click',()=>{img.src=btn.dataset.lightbox;root.classList.add('open')}));
  root.querySelector('[data-lightbox-close]').addEventListener('click',()=>{root.classList.remove('open');img.src=''});
  root.addEventListener('click',e=>{if(e.target===root){root.classList.remove('open');img.src=''}});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){root.classList.remove('open');img.src=''}});
}
