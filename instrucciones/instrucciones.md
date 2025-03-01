🚀 Hoy vamos a hacer un mini proyecto muy chulo en JavaScript. Vamos a crear una lista de personajes de un videojuego, donde podrás agregar, eliminar y guardar personajes usando el navegador. Aprenderás a manejar:

✅ DOM (para mostrar y actualizar la lista de personajes en la web).
✅ Arrays (para guardar los personajes en una lista).
✅ Eventos (para que el usuario pueda hacer clic y añadir/eliminar personajes).
✅ LocalStorage (para que los personajes se guarden y no se pierdan cuando recargues la página).

📝 Lo que tienes que hacer
1️⃣ Crea una página web con dos campo de texto donde el usuario pueda escribir el nombre de su personaje y el videojuego al que pertenece.
2️⃣ Añade un botón "Agregar" que, cuando se haga clic, guarde el personaje en una lista. {nombre: Mario, juego: SuperMarioBros}
3️⃣ Muestra la lista de personajes en la misma pantalla (cada uno con un botón "Eliminar" al lado).
4️⃣ Guarda los personajes en el LocalStorage, así no desaparecen cuando se cierre la página. Para probar que funciona deberas cerrar la pantalla del navegador y comprobar que los personajes almacenados siguen ahi.
5️⃣ Cuando la página se cargue, revisa el LocalStorage y muestra los personajes guardados.

🛠️ Herramientas que necesitas
🔹 Un archivo HTML con un formulario de entrada con un (input), un botón (button) y un contenedor (section ul) para la lista.
🔹 Un archivo JavaScript donde harás la magia del DOM, arrays, eventos y LocalStorage. Llamalo main.js

🎯 Pistas para hacerlo
🔹 Usa document.querySelector() para seleccionar elementos del HTML.
🔹 Usa .addEventListener("submit", ...) para capturar cuando alguien haga clic en el formulario.
🔹 Usa localStorage.setItem() para guardar la lista y localStorage.getItem() para recuperarla cuando haga falta.
🔹 Usa createElement para crear los li correspondientes con el nombre de cada personaje.
🔹 Usa .splice() para eliminar personajes del array cuando el usuario haga clic en "Eliminar" y remove() para borrarlo del html

📌 Ejemplo de cómo debería funcionar
El usuario escribe "Mario" en el campo y el juego al que pertenece "SuperMarioBros" y pulsa Agregar.
En la pantalla aparece una lista con:
Mario - SuperMarioBros ❌ (botón para eliminar)
Si el usuario recarga la página, Mario sigue ahí porque está guardado en LocalStorage.
Si pulsa el ❌, Mario desaparece de la lista y también de LocalStorage.

Olvidaros del localStorage hasta el final del ejercicio.
