import { Injectable } from '@angular/core';
import { JSONService } from './textdb.service';
import * as Faker from 'faker';

const source = "../userdb.json";

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
	private data: User[];

	constructor(client: JSONService) {
		this.json = client;
		client.read(source).then((content: User[]) => {
			this.data = content;
		});
	} 

	public getUserData(id: number) {
		new Promise((resolve, reject) => {
			resolve(this.data.filter((thing: User) => thing.userID === id));
		});
	}

	public getAllUsers() {
		new Promise((resolve, reject) => {
			resolve(this.data);
		});
	}

	public addUser(user: User) {
		new Promise((resolve, reject) => {
			this.data.push(user);
			resolve(this.data[this.data.length - 1]);
		});
	}
}
