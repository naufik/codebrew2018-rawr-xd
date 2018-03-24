import { Injectable } from '@angular/core';
import { JSONService } from './textdb.service';
import * as Faker from 'faker';

import * as DB from '../userdb';

interface User {
	userID?: number,
	name: string,
	picture: string,
	dob: Date,
	contact: {
		contactNumber: string,
		email: string,
		website?: string,
		emergencyContact: {
			name: string,
			contact: string
		}
	},
	friends: number[],
	organizations: number[],
	pastEvents: number[],
	currentEvents: number[],
	points: {
		rank: string,
		points: number
	}
}

@Injectable()
export class ProfileService {
	private json: JSONService;
	private data;

	constructor(client: JSONService) {
		this.json = client;
		this.data = DB
	} 

	public getUserData(id: number) {
		return new Promise((resolve, reject) => {
			resolve(this.data.filter((thing: User) => thing.userID === id));
		});
	}

	public getAllUsers() {
		return new Promise((resolve, reject) => {
			resolve(this.data);
		});
	}

	public addUser(user: User) {
		return new Promise((resolve, reject) => {
			this.data.push(user);
			resolve(this.data[this.data.length - 1]);
		});
	}
}
