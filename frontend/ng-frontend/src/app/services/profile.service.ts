import { Injectable } from '@angular/core';
import * as Faker from 'faker';

interface User {
	userid: number,
	name: {
		first: string,
		last: string
	},
	register: Date
}

@Injectable()
export class ProfileService {
	private data: User[] = [];
	
	constructor() { 
		for(let i = 0; i < 100; ++i) {
			this.data.push({
				userid: i,
				name: {
					first: Faker.name.firstName(),
					last: Faker.name.lastName()
				},
				register: Faker.date.past()
			});
		}
	}

	public getUser(id: number) {
		return new Promise((resolve, reject) => {
			if (id < this.data.length) {
				resolve(this.data[id]);
			} else {
				reject(new Error("User with that ID not found."));
			}
		});
	}

	public getAllUsers() {
		return new Promise((resolve, reject) => {
			resolve(this.data);
		});
	}
}
