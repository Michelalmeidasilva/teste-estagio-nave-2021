import request from 'supertest'
import app from 'server'
import { DatabaseTest } from 'helpers'
import NaverFactory from 'test/factories/navers-factory'

describe('TEST USERS', () => {
  beforeEach(async () => {
    await DatabaseTest.createDB()
    global.server = app.listen()
    global.naver = await NaverFactory()
  })

  afterEach(async () => {
    await DatabaseTest.destroyDB()
    global.server.close()
  })

  describe('POST /v1/navers/add', () => {
    test('should create a new naver', async () => {
      const response = await request(global.server)
        .post('/v1/navers/add')
        .send({
          name: 'Naver Test',
          job_role: 'tester',
          birthdate: '1998-01-08',
          admission_date: "2021-03-10"
        })
      expect(response.status).toEqual(200)
      expect(response.type).toEqual('application/json')
      expect(response.body).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String)
        })
      )
    })
  })


  describe('GET /v1/navers', () => {
    test('should return a list of navers', async () => {
      const response = await request(global.server)
      .get('/v1/navers')
      expect(response.status).toEqual(200)
      expect(response.type).toEqual('application/json')
      expect(response.body['0']).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          job_role: expect.any(String),
          birthdate: expect.any(String),
          admission_date: expect.any(String),
          created_at: expect.any(String)
        })
      )
    })
  })

  describe('GET /v1/navers/:id', () => {
    test('should return a naver', async () => {
      const response = await request(global.server)
        .get(`/v1/navers/${global.naver.id}`)
      expect(response.status).toEqual(200)
      expect(response.type).toEqual('application/json')
      expect(response.body).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          job_role: expect.any(String),
          birthdate: expect.any(String),
          admission_date: expect.any(String),
          created_at: expect.any(String)
        })
      )
    })
  })
})
