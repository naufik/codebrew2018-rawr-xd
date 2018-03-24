import { Injectable } from '@angular/core';
import { JSONService } from './textdb.service';
import { ProfileService } from './profile.service';

const source = "";

@Injectable()
export class OrganizationService {
	public json: JSONService;
	public users: ProfileService;
	public data: any[];

	constructor(client: JSONService, users: ProfileService) {
		this.json = client;
		this.users = users;

		this.json.read(source).then((data: any) => {
			this.data = data.content;
		});
	}

	public getAll() {
		return new Promise((resolve, reject) => {
			resolve(this.data);
		});
	}

	public getByID(id: number) {
		return new Promise((resolve, reject) => {
			let contentList = this.data.filter(org => org.orgID === id);

			if (contentList.length > 0) {
				contentList[0];	
			} else {
				reject(new Error("Cannot find organization by ID"));
			}
		});
	}

	public getMembers(id: number) {
		return this.users.getAllUsers().then((data: any[]) => {
			this.getByID(id).then((org: { members?: number[] } ) => {
				return data.filter(user => org.members.includes(user.userID));
			});
		});
	}

	public getEvents(id: number) {
		return this.users
	}
}
