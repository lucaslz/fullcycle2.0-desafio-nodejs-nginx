const express = require('express')
const app = express()
const port = 3000

const connection = require('./DataBase/Connection');
const peoples = require('./services/People');

app.get('/', async (req, res) => {
    await peoples.insPeople(req.query.name);
    const conn = await connection.connect();
    const sql = `SELECT * FROM peoples`
    conn.query(sql, async (error, sltPeoples, fields) => {
        if (error) {
          return console.error(error.message);
        }
        let dadosTela = "<ul>";
        sltPeoples.forEach(element => {
            var newFormatDate = new Date(element.created_at).toISOString().slice(0,10) + " " + new Date(element.created_at).toISOString().slice(11,19)
            dadosTela += "<li> " + element.id + " | " + element.name + " | " + newFormatDate + "</li>";
        });
        dadosTela += "</ul>";
        results = await "<h1>Full Cycle</h1><br><h3>Lista de nomes cadastrada no banco de dados:<h3>" + dadosTela;
        res.send(results);
    });
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
});