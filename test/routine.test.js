/* eslint-disable */
const request = require("supertest");
const app = require("../index");

describe('GET /topics', () => {
    it('Respond with array of topics', async () => {
        request(app)
            .get('/topics')
            .set('Accept', 'application/json')
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                console.log(response.body)
            })
    })
})
