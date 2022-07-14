import { createConnection } from 'mysql';
export const connection = createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tiendavirtual'
});

export async function connectDB() {
    connection.connect()

}

export async function disconnectDB() {
    connection.destroy()
}




