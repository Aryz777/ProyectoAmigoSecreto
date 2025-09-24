// Array para guardar los amigos
let amigos = [];

// Referencias al DOM
const inputNombre = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

// Agregar un amigo
function agregarAmigo() {
    const nombre = inputNombre.value.trim();

    if (nombre === "") {
        alert("Ingresa un nombre válido");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Ese nombre ya fue agregado");
        return;
    }

    amigos.push(nombre);
    inputNombre.value = "";
    actualizarLista();
}

// Actualizar la lista de amigos en pantalla
function actualizarLista() {
    listaAmigos.innerHTML = "";

    amigos.forEach((nombre, index) => {
        const li = document.createElement("li");
        li.textContent = nombre;

        // Botón para eliminar amigo
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.classList.add("btn-eliminar");
        btnEliminar.onclick = () => {
            amigos.splice(index, 1);
            actualizarLista();
        };

        li.appendChild(btnEliminar);
        listaAmigos.appendChild(li);
    });
}

// Sortear un amigo secreto 
function sortearAmigo() {
    if (amigos.length < 1) {
        alert("Agrega al menos 2 amigos para sortear");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const seleccionado = amigos[indice];

    resultado.textContent = `El amigo secreto es: ${seleccionado}`;

    // Eliminar el amigo sorteado de la lista
    amigos.splice(indice, 1);
    actualizarLista();

    // Mensaje final cuando ya no queden nombres
    if (amigos.length === 0) {
        resultado.textContent = "Ya no quedan amigos por sortear";
    }
}

