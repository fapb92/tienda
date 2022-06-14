import { connection } from "../config/conexion";
import { insertarProductos, obtenerProductos } from "../models/productos";

export function indexProductos(req, res) {

    obtenerProductos(connection, (error, datos) => {
        res.render('productos/index', { title: 'Tienda virtual', products: datos });
    })
}

export function crearProductos(req, res) {
    res.render('productos/crear')
}

export function guardarProductos(req, res) {
    insertarProductos(connection, req.body, (error) => {
        res.redirect("/productos")
    })

}

