const connection = require('../DataBase/Connection');


module.exports.insPeople = async function(name) {
    let verifyName = name != '' ? name : 'Lucas';
    const conn = await connection.connect();
    const sql = `INSERT INTO peoples(name) values('${verifyName}')`
    conn.query(sql)
    conn.end()
}