const socket = io();

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

ChatBox.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    if (ChatBox.value.trim().length > 0) {
      socket.emit("mensaje", { usuario: usuario, mensaje: ChatBox.value });

      ChatBox.value = "";
    }
  }
});

socket.on("mensajesLogs", (data) => {
  const messagesLogs = document.getElementById("messagesLogs");

  let mensajes = "";

  data.forEach((mensaje) => {
    mensajes += `

                    <div class ="message">

                        <span class = "user" > ${mensaje.usuario} </span>

                        <div class = "text" > ${mensaje.mensaje} </div>

                    </div> `;
  });

  messagesLogs.innerHTML = mensajes;
});
