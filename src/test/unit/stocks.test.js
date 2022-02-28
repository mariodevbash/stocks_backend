const request = require('supertest')
const { app } = require('../../index')

describe('POST /stocks', () => {
  test('Practice Test', () => {
    expect(1 + 2).toBe(3)
  })

  test('Should store a new product', async () => {
    await request(app)
      .post('/stocks')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
  })
})
