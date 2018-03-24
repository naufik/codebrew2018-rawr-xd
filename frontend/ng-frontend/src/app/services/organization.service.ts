import { Injectable } from '@angular/core';
import { JSONService } from './textdb.service';
import { ProfileService } from './profile.service';

import * as DB from '../orgdb';

@Injectable()
export class OrganizationService {
	public data: any[];
	public users: ProfileService;

	constructor(client: JSONService, users: ProfileService) {
		this.data = DB.content;
		this.users = users;
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
				resolve(contentList[0]);	
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
}
