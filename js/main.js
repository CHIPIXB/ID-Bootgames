const nombre = document.querySelector('#nombre')
const apodo = document.querySelector('#apodo')
const form = document.querySelector('#formulario')
const listName = document.querySelector('#listaNombres')


let cartasArray = JSON.parse(localStorage.getItem("cartas")) || [];



function guardarEnLocalStorage(){
    localStorage.setItem("cartas", JSON.stringify(cartasArray))
}

function cargarDesdeLocalStorage(){

    listName.innerHTML= "";

    cartasArray.forEach(({nombre, apodo}) => {
        printOneCard(nombre, apodo, true)
    });
}
cargarDesdeLocalStorage()

function printOneCard(nombre, apodo, fromLocalStorage = false){
    const li = document.createElement("li")
    li.classList.add("mi-estilo")
    li.innerHTML =`El nombre que has elegido es <span>${nombre}</span> y su apodo es <span>${apodo}</span> <button class = "eliminar"> eliminar </button>`

    listName.appendChild(li)

    li.querySelector('.eliminar').addEventListener('click', () => {
        deleteOneCard(nombre, apodo, li)
    })
}


function addOneCard(nombre, apodo, fromLocalStorage = false){
    if(!fromLocalStorage && cartasArray.some(carta => carta.nombre === nombre && carta.apodo === apodo )){
        alert('A este personaje ya le pusiste ese apodo. Prueba con otro.');
        return;
    }
    cartasArray.push({nombre, apodo})
    guardarEnLocalStorage();
    printOneCard(nombre, apodo)
    console.log(cartasArray)
}


function addToListName(event){
    event.preventDefault();
    const nombreValue = nombre.value
    const apodoValue = apodo.value

    if(nombreValue === "" || apodoValue === ""){
        alert("¿De veras no sabes de quienes estamos hablando?")
        return
    }
    addOneCard(nombreValue, apodoValue)
    
    form.reset()
}

form.addEventListener('submit', addToListName)



function deleteOneCard(nombre, apodo, domElement){
    const index = cartasArray.findIndex(carta => carta.nombre === nombre && carta.apodo === apodo)
    if(index !== -1){
        cartasArray.splice(index, 1)
        guardarEnLocalStorage()
        console.log(cartasArray)
    }
    domElement.remove()

}



