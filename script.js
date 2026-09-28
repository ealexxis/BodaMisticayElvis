const C=INVITACION;
document.documentElement.style.setProperty("--principal",C.colorPrincipal);
document.documentElement.style.setProperty("--fondo",C.colorFondo);
document.documentElement.style.setProperty("--texto",C.colorTexto);

const ids={intro:C.textoPortada,bride:C.novia,groom:C.novio,date:C.fechaVisible,welcomeTitle:C.bienvenidaTitulo,welcomeText:C.bienvenidaTexto,countText:C.textoCuenta,ceremony:C.ceremonia,ceremonyPlace:C.lugarCeremonia,reception:C.recepcion,receptionPlace:C.lugarRecepcion,galleryTitle:C.tituloGaleria,dress:C.dressCode,dressText:C.dressText,address:C.direccion,rsvpText:C.textoConfirmacion,footerNames:`${C.novia} & ${C.novio}`,footerText:C.pieTexto};
for(const [id,v] of Object.entries(ids)) document.getElementById(id).innerHTML=v;
for(const id of ["map2","maps"]) document.getElementById(id).href=C.mapa;
for(const id of ["map1","maps"]) document.getElementById(id).href=C.mapa2;
document.getElementById("gift").href=C.mesaRegalos;
document.getElementById("gift2").href=C.mesaRegalos2;
document.getElementById("rsvp").href=C.formularioRSVP;
document.getElementById("music").src=C.cancion;

const target=new Date(C.fechaEvento);
function tick(){let d=Math.max(0,target-new Date());let v=[Math.floor(d/864e5),Math.floor(d/36e5)%24,Math.floor(d/6e4)%60,Math.floor(d/1e3)%60];["days","hours","minutes","seconds"].forEach((x,i)=>document.getElementById(x).textContent=String(v[i]).padStart(2,"0"))} tick();setInterval(tick,1000);

const audio=document.getElementById("music"),btn=document.getElementById("musicBtn");
document.getElementById("open").onclick=()=>{audio.play().then(()=>btn.textContent="❚❚").catch(()=>{});document.querySelector(".section").scrollIntoView({behavior:"smooth"})};
btn.onclick=()=>audio.paused?audio.play().then(()=>btn.textContent="❚❚"): (audio.pause(),btn.textContent="♫");

const io=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add("show")),{threshold:.12});
document.querySelectorAll(".reveal").forEach(x=>io.observe(x));