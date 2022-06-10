let mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tiendavirtual'
});

connection.connect((err) => {
    if (!err) {
        console.log('Conexión establecida');
    } else {
        console.log('Problemas con la conexión');
    }
})

module.exports = connection