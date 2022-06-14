
export function obtenerProductos(conexion, funcion) {
    conexion.query("SELECT * FROM productos", funcion)
}

export function insertarProductos(conexion, datos, funcion) {
    conexion.query("INSERT INTO productos (nombre, cantidad, precio) VALUES (?,?,?)", [datos.nombre, datos.cantidad, datos.precio], funcion)
}