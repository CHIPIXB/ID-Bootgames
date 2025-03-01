const nombre = document.querySelector("#nombre");
const apodo = document.querySelector("#apodo");
const form = document.querySelector("#formulario");
const listName = document.querySelector("#listaNombres");

let cartasArray = JSON.parse(localStorage.getItem("cartas")) || [];

function guardarEnLocalStorage() {
  localStorage.setItem("cartas", JSON.stringify(cartasArray));
}

function cargarDesdeLocalStorage() {
  listName.innerHTML = "";

  cartasArray.forEach(({ nombre, apodo }) => {
    printOneCard(nombre, apodo, true);
  });
}
cargarDesdeLocalStorage();

function printOneCard(nombre, apodo, fromLocalStorage = false) {
  const li = document.createElement("li");
  li.classList.add("mi-estilo");
  li.innerHTML = `El nombre que has elegido es <span>${nombre}</span> y su apodo es <span>${apodo}</span> <button class = "eliminar"> eliminar </button>`;

  listName.appendChild(li);

  li.querySelector(".eliminar").addEventListener("click", () => {
    deleteOneCard(nombre, apodo, li);
  });
}

function addOneCard(nombre, apodo, fromLocalStorage = false) {
  if (
    !fromLocalStorage &&
    cartasArray.some(
      (carta) => carta.nombre === nombre && carta.apodo === apodo
    )
  ) {
    alert("A este personaje ya le pusiste ese apodo. Prueba con otro.");
    return;
  }
  cartasArray.push({ nombre, apodo });
  guardarEnLocalStorage();
  printOneCard(nombre, apodo);
  console.log(cartasArray);

  let cartaEncontrada = "";

  if (
    (cartaEncontrada = carta.find(
      (carta) =>
        carta.nombre.toLowerCase() === nombre.toLowerCase() &&
        carta.apodo.toLowerCase() === apodo.toLowerCase()
    ))
  ) {
    const cartaDefinitiva = document.getElementById(cartaEncontrada.id);
    if (cartaDefinitiva) {
      cartaDefinitiva.classList.add("volteada");
    }
  }
}

function addToListName(event) {
  event.preventDefault();
  const nombreValue = nombre.value;
  const apodoValue = apodo.value;

  if (nombreValue.trim() === "" || apodoValue.trim() === "") {
    alert("¿De veras no sabes de quienes estamos hablando?");
    return;
  }
  addOneCard(nombreValue, apodoValue);

  form.reset();
}

form.addEventListener("submit", addToListName);

function deleteOneCard(nombre, apodo, domElement) {
  const index = cartasArray.findIndex(
    (carta) => carta.nombre === nombre && carta.apodo === apodo
  );
  if (index !== -1) {
    cartasArray.splice(index, 1);
    guardarEnLocalStorage();
    console.log(cartasArray);
  }
  domElement.remove();
}

// const cartaColeccionable = cartasCorrectas.find(
//   (carta) =>
//     carta.nombre.toLowerCase() === nombreValue.toLowerCase() &&
//     carta.apodo.toLowerCase() === apodoValue.toLowerCase()
// );

// function cartaCorrecta(nombreValue, apodoValue) {
//   return cartasCorrectas.find(
//     (carta) => carta.nombre.toLowerCase() === nombreValue.toLowerCase() &&
//     carta.apodo.toLowerCase() === apodoValue.toLowerCase()
//   );
// }

// function cartaColeccionada(carta){
//     const cartasContainer = document.querySelector("#cartasContainer")
//     const divCarta = document.createElement("div")
//     divCarta.classList.add("carta")

//     divCarta.innerHTML = `<h3>${carta.nombre}</h3><p>${carta.apodo}</p>`
//     cartasContainer.appendChild(divCarta)
// }
