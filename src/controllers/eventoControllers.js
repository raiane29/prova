import conn from "../config/conn.js"
import {v4 as uuidv4} from "uuid"
import router from "../routes/eventoRoutes.js";


export const postEvento = (request, response) => {
    const { titulo, dataEvento, palestranteIdFinal } = request.body;
    const url = router.get("/eventos/agenda/")
    const palestranteId = url.split('/')[3]
    palestranteIdFinal = palestranteId.find((palestrante)=> palestrante.id === palestranteId)
    
    //validações
    if (!titulo) {
     response.status(400).json({ err: "o titulo é obrgatório" });
    }
    if (!dataEvento) {
        response.status(400).json({ err: "a data é obrgatório" });
       }
       
     const id = uuidv4();
     const insertSql = /*sql*/ ` INSERT INTO eventos(evento_id, titulo, dataEvento, palestrante) 
     VALUES("${id}", "${titulo}", "${dataEvento}", "${palestranteIdFinal}")`;
   
     conn.query(insertSql, (err) => {
      if (err) {
       console.error(err);
       response.status(500).json({ err: "Erro ao cadastrar o Evento" });
       return;
      }
      response.status(201).json({ message: "Evento cadastrado" });
     });
    }
   
export const getEvento = (request, response) => {
    const sql = /*sql*/ `SELECT * FROM eventos`;
      conn.query(sql, (err, data) => {
       if (err) {
        console.error(err);
        response.status(500).json({ err: "Erro so buscar evento" });
        return;
       }
        const Eventos = data;
        response.status(200).json(Eventos);
    });
};