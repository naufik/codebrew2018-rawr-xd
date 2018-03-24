import { Injectable } from '@angular/core';
import { JSONService } from './textdb.service';
import { EventService } from './event.service';

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
	events: number[],
	points: {
		rank: string,
		points: number
	}
}

@Injectable()
export class ProfileService {
	private data;
	private events: EventService;

	constructor(events: EventService) {
		this.data = DB.content;
		this.events = events;
	} 

	public getUserData(id: number) {
		return new Promise((resolve, reject) => {
			resolve(this.data.filter((thing: User) => thing.userID === id)[0]);
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

	public getEventHistory(id: number) {
		return this.getUserData(id).then((user: User) =>{
				return this.events.getByIds(user.events);
			});
	}
}
