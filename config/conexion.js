import { createConnection } from 'mysql';
export const connection = createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tiendavirtual'
});

export async function connectDB() {
    let conDB;
    connection.connect((err) => { conDB = !err })
    return conDB
}

export async function disconnectDB() {
    let conDB
    connection.end((err) => { conDB = !err })
    return conDB
}



