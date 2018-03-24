import { Injectable } from '@angular/core';
import { JSONService } from './textdb.service';

import * as DB from '../taskdb';

@Injectable()
export class TaskService {
	public data: any[];

	constructor() {
		this.data = DB.content;
	}

	public getAll() {
		return new Promise((resolve, reject) => {
			resolve(this.data);
		});
	}
}
