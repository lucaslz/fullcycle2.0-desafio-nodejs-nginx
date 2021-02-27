const express = require('express')
const app = express()
const port = 3000

const connection = require('./DataBase/Connection');
const peoples = require('./services/People');

app.get('/', async (req, res) => {
    await peoples.insPeople(req.query.name);
    const conn = await connection.connect();
    const sql = `SELECT * FROM peoples`
    conn.query(sql, (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        let dadosTela = "<ul>";
        results.forEach(element => {
            var newFormatDate = new Date(element.created_at).toISOString().slice(0,10)
            dadosTela += "<li> " + element.id + " | " + element.name + " | " + newFormatDate + "</li>";
        });
        dadosTela += "</ul>";
        res.send("<h1>Full Cycle</h1><br><h3>Lista de nomes cadastrada no banco de dados:<h3>" + dadosTela);
    });
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
});