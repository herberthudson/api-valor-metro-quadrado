import lowdb from 'lowdb'
import { default as FileAsync } from 'lowdb/adapters/FileAsync'
import { DATABASE_FILE } from '../utils/constants'
import { IDataBase, ISquerMeterData } from './dataTypings'

class SquareMeterModel {
	private db: lowdb.LowdbAsync<IDataBase> | undefined
	private adapter: lowdb.AdapterAsync
	constructor() {
		this.adapter = new FileAsync<IDataBase>(DATABASE_FILE)
		this.initDataBase()
	}

	private async initDataBase(): Promise<void> {
		this.db = await lowdb(this.adapter)
		this.db.defaults({ squareMeter: { value: 10000 } }).write()
	}

	public async get(): Promise<ISquerMeterData | undefined> {
		return this.db?.get('squareMeter').value()
	}
}

const SquareMeter = new SquareMeterModel()

export default SquareMeter
