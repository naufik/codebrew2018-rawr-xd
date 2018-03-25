import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	title = 'app';

	public searchState = {
    	query: '',
    	region: true,
    	tag: -1
    };
	public searchMode = false;
	public profileView = false;

	public handleSearch(event) {
		this.searchState = event;
		this.searchMode = !(this.searchState.query === '' &&
			this.searchState.tag === -1);
	}

	public changeProfileView() {
		this.profileView = !this.profileView;
	}
}
