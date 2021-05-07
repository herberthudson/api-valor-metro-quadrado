import express from 'express'
import { squareMeterRouter } from './Routes'

const app = express()
app.use('/', squareMeterRouter)
app.listen(4000, () => {
	console.log(`server running on port 4000`)
})
