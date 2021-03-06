const config = require("../ConfigDataBase");
const mysql = require('mysql')

module.exports.connect = async function() {
    const connection = await mysql.createConnection(config.config)
    return connection;
}