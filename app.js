// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    
    if (!nombre) {
        alert("Por favor, ingresa un nombre antes de agregar.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = ""; 
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 5) {
        alert("Agrega al menos 5 amigos para sortear");
        return;
    }
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigos[indiceSorteado]}</strong></li>`;
}