import * as express from 'express'
import { ISquerMeterData } from 'Models/dataTypings'
import SquareMeterModel from 'Models/SquareMeterModel'
import { BaseController } from './BaseController'

export class SquareMeterController extends BaseController {
	private db: typeof SquareMeterModel

	constructor(_dataBase: typeof SquareMeterModel) {
		super()
		this.db = _dataBase
	}

	protected async execute(
		req: express.Request,
		res: express.Response,
	): Promise<void> {
		try {
			this.ok<ISquerMeterData>(res, await this.db.get())
		} catch (error) {
			this.fail(res, error.toString())
		}
	}
}
