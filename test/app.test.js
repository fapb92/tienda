import request from "supertest";
import app from "../app";
import { connectDB, connection, disconnectDB } from "../config/conexion";

describe("testing routes", () => {
    beforeAll(async () => {
        await connectDB()
    });

    afterAll(async () => {
        await disconnectDB()
    });

    const routesTesting = [
        "/",
        "/users",
        "/productos"
    ]

    routesTesting.forEach((body) => {
        test(`should respond a 200 status code for GET ${body}`, async () => {
            const response = await request(app).get(body).send()
            expect(response.statusCode).toBe(200)
        })
    })

})

describe('should response with error', () => {
    beforeAll(async () => {
        if (connection.state === 'authenticated') {
            await disconnectDB()
        }
    });

    test('should respond with 503 status code', async () => {
        const response = await request(app).get('/productos').send()
        expect(response.statusCode).toBe(503)
        expect(response.headers['content-type']).toEqual(expect.stringContaining("html"))
    })
});