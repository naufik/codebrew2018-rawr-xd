import { Injectable } from '@angular/core';
import { JSONService } from './textdb.service';

const path = "";

@Injectable()
export class TaskService {
	private json: JSONService;

	constructor(service: JSONService) {
		this.json = service;
	}

	public getAll() {
		return this.json.read(path).then((data: any) => {
			let tasks: any[] = data.content;
			return tasks;
		});
	}

	public tasksFor(id: number) {
		this.getAll()
			.then((tasks) => {
				return tasks.filter((task) => {
					
				});
			})
	}
}
