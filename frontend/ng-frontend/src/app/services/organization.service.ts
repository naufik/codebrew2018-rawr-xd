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

	public getMembersOf(id: number) {
		return 
	}

}
