import { SquareMetercontroller } from '../Controllers/SquareMeterController'
import { Router } from 'express'

const squareMeterRouter: Router = Router()

squareMeterRouter.get('/', (req, res) =>
	new SquareMetercontroller().get(req, res),
)

export { squareMeterRouter }
