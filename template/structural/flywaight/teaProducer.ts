import { GreenTee } from './greenTee';

export class TeaProducer {
	avalibleTea = [];

	make(preference, table) {
		if(!this.avalibleTea[table]) {
			this.avalibleTea[table] = new GreenTee(preference);
		}
		return this.avalibleTea[table];
	}
}