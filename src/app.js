import express from "express";
import exphbs from "express-handlebars";
import ViewsRouter from "./routes/views.routes.js";
import { Server } from "socket.io";
const app = express();
const PUERTO = 8080;

// consume carpeta public
app.use(express.json());
app.use(express.urlencoded({ extends: true }));
app.use(express.static("./src/public"));
// handlebars
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

app.use("/", ViewsRouter);

const http = app.listen(PUERTO, () => {
  console.log("escuchando en el puerto " + PUERTO);
});

const io = new Server(http);

io.on("connection", (socket) => {
  console.log("Un cliente se conecto");

  socket.on("mensaje", (data) => {
    console.log(data);
  });
});
