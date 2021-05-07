import * as express from 'express'
import { BaseController } from './BaseController'

export class SquareMetercontroller extends BaseController {
	protected async execute(
		req: express.Request,
		res: express.Response,
	): Promise<any> {
		try {
			return this.ok<any>(res, { value: 10000 })
		} catch (error) {
			this.fail(res, error.toString())
		}
	}
}
