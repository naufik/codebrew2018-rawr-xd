import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JSONService {
	private http: HttpClient;

	constructor(http: HttpClient) {
		this.http = http;
	}

	public read(url: string): Promise<any[]> {
		return new Promise((resolve, reject) => {
			this.http.get(url).subscribe((data: any) => {
				let k: any[] = data['content'];
				resolve(k);
			}, (error) => {
				resolve(error);
			});
		});
	}
}
