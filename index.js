
const BASE = 'https://karimndiaye3038-bit.github.io/Force/';

const prods = [
  {
    name: 'WHEY PROTEIN',
    desc: '100% naturelle et sans lactose',
    cat: 'whey',
    badge: 'BESTSELLER',
    bc: 'background:#C0392B',
    prix: '13 000 FCFA',
    img: BASE + 'NU2.JPG'
  },
  {
    name: 'COLLAGEN',
    desc: '100% naturelle et sans lactose',
    cat: 'collagen',
    badge: 'NOUVEAU',
    bc: 'background:linear-gradient(135deg,#D4A843,#F0C96A);color:#000',
    prix: '10 000 FCFA',
    img: BASE + 'NU1.JPG'
  },
  {
    name: 'CREATINE',
    desc: '100% naturelle et sans lactose',
    cat: 'creatine',
    badge: null,
    bc: '',
    prix: '15 000 FCFA',
    img: BASE + 'NU10.JPG'
  },
  {
    name: 'WHEY GOLD',
    desc: '100% naturelle et sans lactose',
    cat: 'whey',
    badge: 'PREMIUM',
    bc: 'background:linear-gradient(135deg,#D4A843,#F0C96A);color:#000',
    prix: '20 000 FCFA',
    img: BASE + 'NU8.JPG'
  },
  {
    name: 'WHEY',
    desc: '100% naturelle et sans lactose',
    cat: 'whey',
    badge: null,
    bc: '',
    prix: '13 000 FCFA',
    img: BASE + 'NU3.JPG'
  },
  {
    name: 'WHEY',
    desc: '100% naturelle et sans lactose',
    cat: 'whey',
    badge: null,
    bc: '',
    prix: '13 000 FCFA',
    img: BASE + 'NU4.JPG'
  },
  {
    name: 'COLLAGEN',
    desc: '100% naturelle et sans lactose',
    cat: 'collagen',
    badge: null,
    bc: '',
    prix: '13 000 FCFA',
    img: BASE + 'NU5.JPG'
  },
  {
    name: 'WHEY',
    desc: '100% naturelle et sans lactose',
    cat: 'whey',
    badge: null,
    bc: '',
    prix: '13 000 FCFA',
    img: BASE + 'NU6.JPG'
  },
];

function renderP(f='all'){
  const list=f==='all'?prods:prods.filter(p=>p.cat===f);
  document.getElementById('pgrid').innerHTML=list.map((p,i)=>`
    <div class="pcard" style="animation:fadeUp .5s ease ${i*.07}s both">
      <div class="pimg">
        <img src="${BASE}${p.img}" alt="${p.name}" loading="lazy" onerror="this.style.display='none'" />
        ${p.badge?`<div class="badge" style="${p.bc}">${p.badge}</div>`:''}
      </div>
      <div class="p-5">
        <h3 class="bebas text-xl tracking-wide mb-1 text-white">${p.name}</h3>
        <p class="text-sm mb-5" style="color:rgba(232,232,232,.4)">${p.desc}</p>
        <button onclick="openModal()" class="btn-gold text-sm w-full text-center">Acheter</button>
      </div>
    </div>`).join('');
}

function filt(f){
  document.querySelectorAll('.fbtn').forEach(b=>b.classList.toggle('active',b.dataset.f===f));
  renderP(f);
}
renderP();

window.addEventListener('scroll',()=>document.getElementById('nav').classList.toggle('scrolled',scrollY>50));

function toggleMob(){const m=document.getElementById('mob-menu'),b=document.getElementById('hambtn'),o=!m.classList.contains('hidden');m.classList.toggle('hidden',o);m.classList.toggle('flex',!o);b.classList.toggle('open',!o)}
function closeMob(){document.getElementById('mob-menu').classList.add('hidden');document.getElementById('mob-menu').classList.remove('flex');document.getElementById('hambtn').classList.remove('open')}

function openModal(){document.getElementById('modal').classList.add('open');document.body.style.overflow='hidden'}
function closeModal(){document.getElementById('modal').classList.remove('open');document.body.style.overflow=''}
function outsideClose(e){if(e.target===document.getElementById('modal'))closeModal()}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

function subContact(e){e.preventDefault();const ok=document.getElementById('cok');ok.classList.remove('hidden');e.target.reset();setTimeout(()=>ok.classList.add('hidden'),4000)}
function subOrder(e){e.preventDefault();document.getElementById('ook').classList.remove('hidden');e.target.reset();setTimeout(closeModal,3000)}

const obs=new IntersectionObserver(entries=>{
  entries.forEach(en=>{
    if(en.isIntersecting){
      en.target.classList.add('in');
      en.target.querySelectorAll('.pfill').forEach(b=>{b.style.width=b.dataset.w+'%'});
    }
  });
},{threshold:.14});
document.querySelectorAll('.reveal,.reveal-l').forEach(el=>obs.observe(el));

const pc=document.getElementById('ptcls');
for(let i=0;i<18;i++){const p=document.createElement('div');p.className='particle';p.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*100}%;width:${Math.random()*3+1}px;height:${Math.random()*3+1}px;animation-duration:${Math.random()*8+6}s;animation-delay:${Math.random()*8}s`;pc.appendChild(p)}
