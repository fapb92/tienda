const connection = require("../config/conexion");

function listaProductos(req, res) {

    connection.query("SELECT * FROM productos", (err, datos) => {
        console.log(datos);
    })
    res.render('index', { title: 'Tieda Express' });

}


module.exports = listaProductos 