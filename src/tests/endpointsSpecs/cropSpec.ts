import supertest from 'supertest'
import imageCrop from '../../routes/api/crop'

const request = supertest(imageCrop)

describe('testing the crop endpoint params', () => {
  it('test if user entered params or not ', async () => {
    request.get('/crop').expect(200)
  })
  it('test if user entered params all params in as requested or not ', async () => {
    request.get('/crop?name=fjord&width=500').expect(400)
  })
  it('test if user entered Image name existe in Database or not ', async () => {
    request.get('/crop?name=&width=500&height=250').expect(400)
  })
  it('test if user entered Image name existe in Database or not ', async () => {
    request.get('/crop?name=fjord&width=&height=250').expect(400)
  })
  it('test if user entered Image name existe in Database or not ', async () => {
    request.get('/crop?name=fjord&width=400&height=').expect(400)
  })
})
