import "dotenv/config"
import express from "express"

//msql
import "./models/palestranteModel.js"
import "./models/participanteModel.js"
import "./models/eventoModel.js"

//rotas
import palestranteRoutes from "./routes/palestranteRouter.js"
import participanteRoutes from "./routes/participanteRoutes.js"
import eventoRoutes from "./routes/eventoRoutes.js"

//-----------
const PORT = process.env.PORT
const app = express()

app.use(express.urlencoded({ extended: true}))
app.use(express.json());

app.use("/palestrante", palestranteRoutes)
app.use("/participante", participanteRoutes)
app.use("/evento", eventoRoutes)

app.use("*", (request, response) => {
 response.status(404).json({message:"Rota não encontrada"})
})

app.listen(PORT, ()=>{
    console.log("Servidor on PORT " + PORT);
})