const body=document.body;
const toggle=document.querySelector('[data-nav-toggle]');
if(toggle){toggle.addEventListener('click',()=>{const open=body.classList.toggle('nav-open');toggle.setAttribute('aria-expanded',open?'true':'false')})}
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>body.classList.remove('nav-open')));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const lightbox=document.querySelector('[data-lightbox]');
if(lightbox){
  const img=lightbox.querySelector('[data-lightbox-img]');
  document.querySelectorAll('[data-lightbox-src]').forEach(tile=>{
    tile.addEventListener('click',()=>{img.src=tile.dataset.lightboxSrc;lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false')})
  });
  const close=()=>{lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');img.src=''};
  lightbox.querySelector('[data-lightbox-close]').addEventListener('click',close);
  lightbox.addEventListener('click',e=>{if(e.target===lightbox)close()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
}