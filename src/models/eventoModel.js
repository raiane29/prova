import conn from "../config/conn.js"

const tabelaEventos = /*sql*/`
CREATE TABLE IF NOT EXISTS eventos(
 evento_id VARCHAR(60) PRIMARY KEY,
 titulo VARCHAR(255) NOT NULL,
 dataEvento DATE NOT NULL
)`

conn.query(tabelaEventos,(err, result,field)=>{
 if(err){
  console.error("Erro ao criar tabela" + err.stack)
  return
 }
 console.log("Tabela [evento] criada com sucesso")
})
