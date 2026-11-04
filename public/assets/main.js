const d=document.getElementById('drawer'),s=document.getElementById('scrim'),t=document.querySelector('.menu-toggle');
function set(o){d.classList.toggle('open',o);s.classList.toggle('open',o);t&&t.setAttribute('aria-expanded',o)}
document.querySelectorAll('[data-open]').forEach(b=>b.onclick=()=>set(true));
document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>set(false));
document.addEventListener('keydown',e=>{if(e.key==='Escape')set(false)});
document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
