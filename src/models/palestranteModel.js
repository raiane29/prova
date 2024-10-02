import conn from "../config/conn.js"

const tabelaPalestrantes = /*sql*/`
CREATE TABLE IF NOT EXISTS Palestrantes(
 palestrante_id VARCHAR(60) PRIMARY KEY,
 nome VARCHAR(255) NOT NULL,
 expertise VARCHAR(255) NOT NULL
)`

conn.query(tabelaPalestrantes,(err, result,field)=>{
 if(err){
  console.error("Erro ao criar tabela" + err.stack)
  return
 }
 console.log("Tabela [palestrante] criada com sucesso")
})