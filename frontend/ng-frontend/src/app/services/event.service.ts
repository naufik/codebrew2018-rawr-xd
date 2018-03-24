import { Injectable } from '@angular/core';
import * as DB from '../eventdb';

@Injectable()
export class EventService {
	private data: any[];

	constructor() {
  		this.data = DB.content;
	}

	public getAll() {
		return new Promise((resolve, reject) => {
			if (this.data) {
				resolve(this.data);
			} else {
				reject(new Error("No data."));
			}
		});
	}

	public getById(id: number) {
		return new Promise((resolve, reject) => {
			let results = this.data.filter(event => event.eventID === id);
			if (results.length > 0) {
				resolve(results[0]);
			} else {
				reject(new Error("No matching data."));
			}
		});
	}

	public getByIds(ids: number[]) {
		return new Promise((resolve, reject) => {
			let results = this.data.filter(event => ids.includes(event.eventID));
			resolve(results);
		});
	}

}
