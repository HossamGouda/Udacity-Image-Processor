import supertest from 'supertest'
import app from '../../server'

const request = supertest(app)

describe('Test for the Home endpoint server', () => {
  it('testing the response of server', async () => {
    const response = await request.get('/')
    expect(response.status).toEqual(200)
  })
})
