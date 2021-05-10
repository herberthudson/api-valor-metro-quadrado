import app from '../../index'
import request from 'supertest'

describe('Testing response', () => {
	it('should be return ok', async () => {
		const result = await request(app)
			.get('/api')
			.set('Accept', 'application/json')

		expect(result.statusCode).toEqual(200)
	})
})
