import { connection } from "../config/conexion";
import { obtenerProductos } from "../models/productos";

export function listaProductos(req, res) {

    obtenerProductos(connection, (error, datos) => {
        res.render('productos/index', { title: 'Tieda Express' });
    })


}


