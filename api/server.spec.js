const supertest = require("supertest");
const server = require("./server.js")

describe("GET /supplies", () => {
    test("should return 200 OK", () => {
        return supertest(server)
        .get("/supplies")
        .then(res => {
            expect(res.status).toBe(200);
        })
    })

    test("should return JSON", () => {
        return supertest(server)
        .get("/supplies")
        .then(res => {
            expect(res.type).toMatch(/json/i)
        })
    })
})

describe("POST /supplies", () => {
        test("should save new party item and verify the quantity is correct", () => {
            const newItem = {
                item: "guitar",
                quantity: 3
            }
            
            return supertest(server)
            .post("/supplies")
            .send(newItem)
            .then(res => {
                expect(res.body.item).toBe(newItem.item)
                expect(res.body.quantity).toBe(newItem.quantity)
                console.log({expected: res.body.item, got: newItem.item})
                // console.log(res.body.quantity)
            })
        })
    })

describe("DELETE /supplies", () => {
    const id = 12
    test("Verfies that an item was deleted by checking the status code", () => {
        
        return supertest(server)
        .delete(`/supplies/${id}`)
        .then(res => {
            expect(res.status).toBe(202)
        })
    })
    test("Verifies that an item was deleted by checking the response body for the number of items deleted", () => {
        return supertest(server)
        .delete(`/supplies/${id}`)
        .then(res => {
            expect(res.body).toBe(1)
        })
    })
    
})