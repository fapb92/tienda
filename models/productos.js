
export function obtenerProductos(conexion, funcion) {
    conexion.query("SELECT * FROM productos", funcion)
}

export function insertarProductos(conexion, datos, funcion) {
    conexion.query("INSERT INTO productos (nombre, cantidad, precio) VALUES (?,?,?)", [datos.nombre, datos.cantidad, datos.precio], funcion)
}

export function borrarProducto(conexion, id, funcion) {
    conexion.query("DELETE FROM productos WHERE id=?", [id], funcion)
}

export function obtenerDatosPorId(conexion, id, funcion) {
    conexion.query("SELECT * FROM productos WHERE id=?", [id], funcion)
}

export function modificarProductos(conexion, id, funcion) {

}