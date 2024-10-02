import conn from "../config/conn.js"

const tabelaParticipantes = /*sql*/`
CREATE TABLE IF NOT EXISTS Participante(
 participante_id VARCHAR(60) PRIMARY KEY,
 nome VARCHAR(255) NOT NULL,
 email VARCHAR(255) NOT NULL
)`

conn.query(tabelaParticipantes,(err, result,field)=>{
 if(err){
  console.error("Erro ao criar tabela" + err.stack)
  return
 }
 console.log("Tabela [participante] criada com sucesso")
})