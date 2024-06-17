console.log("Holis");

const socket = io();

socket.emit("mensaje", "Hola Mundo, te escribo desde el cliente");
