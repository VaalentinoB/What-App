const socket = io();
console.log("Holis");

socket.emit("mensaje", "Hola Mundo, te escribo desde el cliente");

let usuario;

const ChatBox = document.getElementById("ChatBox");

Swal.fire({
  title: "Identificate",

  input: "text",

  text: "Ingresa un usuario para identificarte en el Chat",

  inputValidator: (value) => {
    return !value && "Necesitas escribir un nombre para continuar";
  },

  allowOutsideClick: false,
}).then((result) => {
  usuario = result.value;
});

chatBox.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    if (chatBox.value.trim().length > 0) {
      socket.emit("mensaje", { usuario: usuario, mensaje: chatBox.value });

      chatBox.value = "";
    }
  }
});
