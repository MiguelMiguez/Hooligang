function scrollToElement(elementId) {
  const targetElement = document.getElementById(elementId);
  
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

const nav = document.getElementById("nav")
const open = document.getElementById("open")
const close = document.getElementById("close")
let estaAbierto = false

function abrirMenu(){
  if(!estaAbierto){
    nav.style.right = "0"
    estaAbierto = true
  }
}

function cerrarMenu(){
  if(estaAbierto){
    nav.style.right = "-500px"
    estaAbierto = false
  }
}



open.addEventListener("click", abrirMenu)
close.addEventListener("click", cerrarMenu)