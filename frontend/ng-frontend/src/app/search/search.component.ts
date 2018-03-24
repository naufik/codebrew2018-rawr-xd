import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

interface SearchOptions {
	query: string;
	flags?: {
		region?: boolean,
		water?: boolean,
		equality?: boolean,
		poverty?: boolean,
		education?: boolean
		health?: boolean
	}
}

@Component({
  selector: 'search-filter',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	@Output() public update = new EventEmitter<SearchOptions>();

	constructor() { }

	public filter(t: string) {
		this.update.emit({ query: t });
	}

	ngOnInit() {
	
	}

}
