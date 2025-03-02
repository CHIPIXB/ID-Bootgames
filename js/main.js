const form = document.querySelector(".form")
const inputNombre = document.querySelector('#nombre')
const inputApodo = document.querySelector('#apodo')
const listaIntentos = document.querySelector('.intentos')

form.addEventListener("submit", getDataForm)

function getDataForm(event){
  event.preventDefault()
  const nombre = inputNombre.value.trim();
  const apodo = inputApodo.value.trim();

  const cartaAñadida = cartasCorrectas.find(obj => obj.nombre.toLowerCase() === nombre.toLowerCase() && obj.apodo.toLowerCase() === apodo.toLowerCase())

  if(cartaAñadida){
    const objId = document.querySelector(`.${cartaAñadida.id}`)
    if(objId) {
      objId.classList.add("mostrar")
    }
  }else{
    guardarEnLocalStorage(nombre,apodo)
    añadirALaLista(nombre, apodo)
  }
  form.reset()
}

function añadirALaLista(nombre, apodo){
  const li = document.createElement("li")
  li.textContent = `No hombre...¿Cómo vamos a llamar a ${nombre} ${apodo}?`

  const botonEliminar = document.createElement("button");
  botonEliminar.classList.add("eliminar")
  botonEliminar.textContent = " Hazme Chucrut";

  botonEliminar.addEventListener("click", function(){
    eliminarDesdeLocalStorage(nombre, apodo);
    li.remove()

  })


  li.appendChild(botonEliminar)
  listaIntentos.appendChild(li)
}

function guardarEnLocalStorage(nombre, apodo){
  let intentosGuardados = JSON.parse(localStorage.getItem("intentos")) || [];

  intentosGuardados.push({nombre, apodo})

  localStorage.setItem("intentos", JSON.stringify(intentosGuardados))
}

function cargarDesdeLocalStorage() {
  let intentosGuardados = JSON.parse(localStorage.getItem("intentos")) || [];

  intentosGuardados.forEach(obj => {
      añadirALaLista(obj.nombre, obj.apodo)
  });
}

function eliminarDesdeLocalStorage(nombre, apodo) {
  let intentosGuardados = JSON.parse(localStorage.getItem("intentos")) || [];
  intentosGuardados = intentosGuardados.filter(obj => !(obj.nombre === nombre && obj.apodo === apodo));
  localStorage.setItem("intentos", JSON.stringify(intentosGuardados))
}

cargarDesdeLocalStorage();

