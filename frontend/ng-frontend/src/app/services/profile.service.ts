import { Injectable } from '@angular/core';
import { JSONService } from './textdb.service';
import * as Faker from 'faker';

const source = ""

interface User {
	userID: number,
	name: string,
	picture: string,
	dob: Date,
	contact: {
		contactNumber: string,
		email: string,
		website: string,
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
	
}
