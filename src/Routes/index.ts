import { SquareMeterController } from '../Controllers/SquareMeterController'
import { Router } from 'express'
import SquareMeterModel from '../Models/SquareMeterModel'

const squareMeterRouter: Router = Router()

squareMeterRouter.get('/', (req, res) =>
	new SquareMeterController(SquareMeterModel).get(req, res),
)

export { squareMeterRouter }
