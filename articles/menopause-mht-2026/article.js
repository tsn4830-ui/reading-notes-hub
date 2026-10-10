const progress=document.querySelector('.reading-progress span');
const links=[...document.querySelectorAll('aside a[href^="#"]')];
const chapterJump=document.querySelector('#chapter-jump');
const chapters=[...document.querySelectorAll('main section[id]')];
function updateReading(){const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=`${max>0?100*scrollY/max:0}%`;const current=chapters.filter(s=>s.getBoundingClientRect().top<innerHeight*.35).at(-1)||chapters[0];links.forEach(a=>{const active=a.hash===`#${current.id}`;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')});chapterJump.value=current.id;}
let scheduled=false;addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(()=>{updateReading();scheduled=false})}},{passive:true});addEventListener('resize',updateReading);chapterJump.addEventListener('change',()=>{location.hash=chapterJump.value});updateReading();
