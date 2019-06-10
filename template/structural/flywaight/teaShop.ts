import { TeaProducer } from './teaProducer';

export class TeaShop {
	orders: any = [];
	teaProducer: TeaProducer;
	/**
	 *
	 */
	constructor(tp: TeaProducer) {
		this.teaProducer  = tp;
	}

	takeOrder(teaType: string, table: number) {
		this.orders[table] = this.teaProducer.make(teaType, table);
	}

	serve() {
		console.log(this.orders)
		for(let i = 0; i < this.orders.length; i ++) {
			console.log(this.orders[i]);
		}
	}
}