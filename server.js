const express = require("express")

const app = express()  // Esto nos devuelve un servidor
const PORT = process.env.PORT || 8080
let visitas = 0  // Variable para  app.get("/visita")

app.get("/", (request, response)=> {  //Request es lo que viene de afuera, lo que manda el usuario.

    response.send("<h1 style='color: green;'>Bienvenidos a mi Spaceee</h1>") // Puedo enviar código html, JSON o el que sea

}) // el "/" o path es la ruta raiz de nuestro servidor. // El metodo get es muy popular.

app.get("/tutores", (request, response) => {
    response.send({mensaje: "Saludos a todos los tutores de la clase"})
})

app.get("/hora", (req, res) => res.send(new Date().toLocaleTimeString()) )

app.get("/visita", (req, res) => {
    visitas++   //los ++ hacen que aumente en 1
    res.send(`Se ha visitado este sitio ${visitas} veces.`)
})


const server = app.listen(PORT, () => {
    console.log(`Server listening [${PORT}]...`);
})
server.on("error", e => console.log("Error on server", e))
