const request = require('supertest')
const app = require('../server.js')

describe('GET /', function () {
  it('return json response', function () {
    return request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect('{"message":"Welcome to sample-rest-api"}')
  })
})