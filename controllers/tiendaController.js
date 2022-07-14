import { connection } from "../config/conexion";
import { borrarProducto, insertarProductos, modificarProductos, obtenerDatosPorId, obtenerProductos } from "../models/productos";

export function indexProductos(req, res) {

    obtenerProductos(connection, (error, datos) => {
        if (error) {
            res.status(503).send('service unavailable')
            return
        }
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

export function eliminarProductos(req, res) {
    borrarProducto(connection, req.params.id, (err) => {
        res.redirect("/productos")
    })
}

export function editarProductos(req, res) {

    obtenerDatosPorId(connection, req.params.id, (err, registros) => {
        res.render('productos/editar', { registro: registros[0] })
    })

}

export function actualizarProducto(req, res) {
    modificarProductos(connection, req.body, (err) => {
        res.redirect("/productos")
    })
}