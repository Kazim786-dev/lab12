const request = require('supertest');
const app = require('./routes/User');
const mongoose = require('mongoose');

describe("test - add user", ()=> {
    test(" POST ", ()=>{
        const response = request(app).post("http://localhost:3001/User/add").send({
            "Name":"Kazim",
            "Email":"i202310@nu.edu.pk",
            "Age":20,
            "Contact":123

        }
        )
        expect(response.statusCode).toBe(200);
    })
})

describe("test - delete user", ()=> {
    test(" POST ", ()=>{
        const response = request(app).post("http://localhost:3001/User/delete").send({
            "id":"32434",         
    })
        expect(response.statusCode).toBe(200);
    })
})

describe("test - has user been added? ", ()=> {
    test(" POST ", ()=>{
        const response = request(app).post("http://localhost:3001/User/add").send({
            "Name":"Kazim",         
    })
        expect(response.statusCode).toBe(200);
    })
})