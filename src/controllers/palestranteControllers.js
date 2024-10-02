import conn from "../config/conn.js"
import {v4 as uuidv4} from "uuid"


export const postPalestrante = (request, response) => {
    const { nome, expertise } = request.body;
   
    //validações
    if (!nome) {
     response.status(400).json({ err: "o nome é obrgatório" });
    }
    if (!expertise) {
        response.status(400).json({ err: "o expertise é obrgatório" });
       }
   
     const id = uuidv4();
     const insertSql = /*sql*/ ` INSERT INTO Palestrantes(palestrante_id, nome, expertise) VALUES("${id}", "${nome}", "${expertise}")`;
   
     conn.query(insertSql, (err) => {
      if (err) {
       console.error(err);
       response.status(500).json({ err: "Erro ao cadastrar o palestrante" });
       return;
      }
      response.status(201).json({ message: "palestrante cadastrado" });
     });
    }
   
export const getPalestrante = (request, response) => {
    const sql = /*sql*/ `SELECT * FROM Palestrantes`;
      conn.query(sql, (err, data) => {
       if (err) {
        console.error(err);
        response.status(500).json({ err: "Erro so buscar funcionário" });
        return;
       }
        const palestrantes = data;
        response.status(200).json(palestrantes);
    });
};