import request from "supertest";
import app from "../app";
import { connectDB, disconnectDB } from "../config/conexion";

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