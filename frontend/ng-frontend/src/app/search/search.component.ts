import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

interface SearchOptions {
	query: string;
	region?: boolean,
	tag?: number
}

@Component({
	selector: 'search-filter',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	@Output() public update = new EventEmitter<SearchOptions>();

	constructor() { }

	DropdownValue = [
		{value: -1,name:  "Any"},
		{value: 0, name: "Clean Water"},
		{value: 1, name: "Gender Equality"},
		{value: 2, name: "Poverty"},
		{value: 3, name: "Education"},
		{value: 4, name: "Health"}
	];

	selected = {value: -1, name:  "Any"};

	onSelect(o: any): void {
		this.selected = o;
		this.changeTag(o.value);
	}

	public option = {
		query: '',
		region: true,
		tag: -1
	}

	public changeTag(n: number) {
		this.option.tag = n;
		this.filter();
	}

	public changeRegion(b: boolean) {
		this.option.region = b;
		this.filter();
	}

	public changeQuery(t: string) {
		this.option.query = t;
		this.filter();
	}

	public filter() {
		this.update.emit(this.option);
	}

	ngOnInit() {

	}

}
