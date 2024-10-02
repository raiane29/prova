import conn from "../config/conn.js"
import {v4 as uuidv4} from "uuid"


export const postParticipante = (request, response) => {
    const { nome, expertise } = request.body;
   
    //validações
    if (!nome) {
     response.status(400).json({ err: "o nome é obrgatório" });
    }
    if (!expertise) {
        response.status(400).json({ err: "o expertise é obrgatório" });
       }
   
     const id = uuidv4();
     const insertSql = /*sql*/ ` INSERT INTO Participantes(participante_id, nome, expertise) VALUES("${id}", "${nome}", "${expertise}")`;
   
     conn.query(insertSql, (err) => {
      if (err) {
       console.error(err);
       response.status(500).json({ err: "Erro ao cadastrar o participante" });
       return;
      }
      response.status(201).json({ message: "participante cadastrado" });
     });
    }
   
export const getParticipante = (request, response) => {
    const sql = /*sql*/ `SELECT * FROM Participantes`;
      conn.query(sql, (err, data) => {
       if (err) {
        console.error(err);
        response.status(500).json({ err: "Erro so buscar funcionário" });
        return;
       }
        const participantes = data;
        response.status(200).json(participantes);
    });
};