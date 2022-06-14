export function obtenerProductos(conexion, funcion) {
    conexion.query("SELECT * FROM productos", funcion)
}