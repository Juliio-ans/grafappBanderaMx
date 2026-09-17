const verde=document.getElementById('verde');
const rojo=document.getElementById('rojo');
const franjaVerde=document.getElementById('franjaVerde');
const franjaRoja=document.getElementById('franjaRoja');
const hexVerde=document.getElementById('hexVerde');
const hexRojo=document.getElementById('hexRojo');
function aHex(v){return Number(v).toString(16).padStart(2,'0').toUpperCase();}
function actualizarVerde(){const v=Number(verde.value);franjaVerde.style.backgroundColor=`rgb(0, ${v}, 0)`;hexVerde.textContent=`#00${aHex(v)}00`;}
function actualizarRojo(){const v=Number(rojo.value);franjaRoja.style.backgroundColor=`rgb(${v}, 0, 0)`;hexRojo.textContent=`#${aHex(v)}0000`;}
verde.addEventListener('input',actualizarVerde);rojo.addEventListener('input',actualizarRojo);actualizarVerde();actualizarRojo();
