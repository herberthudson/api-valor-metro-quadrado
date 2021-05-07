import * as express from 'express'

export abstract class BaseController {
	protected abstract execute(
		req: express.Request,
		res: express.Response,
	): Promise<any>

	public async get(
		req: express.Request,
		res: express.Response,
	): Promise<void> {
		try {
			await this.execute(req, res)
		} catch (err) {
			this.fail(res, 'An unexpected error occurred')
		}
	}

	public static jsonResponse(
		res: express.Response,
		code: number,
		message: string,
	) {
		return res.status(code).json({ message })
	}

	public ok<T>(res: express.Response, data?: T) {
		if (!data) {
			res.type('application/json')
			return res.status(200).json(data)
		} else {
			return res.sendStatus(200)
		}
	}

	public fail(res: express.Response, error: Error | string) {
		console.log(error)
		return res.status(500).json({
			message: error.toString(),
		})
	}
}
