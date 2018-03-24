import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
	title = 'app';
	public searchState = {query: ""};
	public searchMode = false;

	public handleSearch(event) {
		this.title = event.query;
		this.searchState = event;
		this.searchMode = (this.searchState.query !== '');
	}
}
