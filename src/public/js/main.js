const socket = io();
console.log("Holis");

socket.emit("mensaje", "Hola Mundo, te escribo desde el cliente");

let usuario;

const ChatBox = document.getElementById("ChatBox");
