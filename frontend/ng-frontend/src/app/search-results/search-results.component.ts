import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '../services/event.service';

interface SearchOptions {
	query: '',
	region: boolean,
	tag: null
}


@Component({
	selector: 'results',
	templateUrl: './search-results.component.html',
	providers: [EventService],
	styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
	private service: EventService;
	@Input() public settings;
	private data;

	constructor(events: EventService) {
		this.service = events;
	}

	ngOnInit() {
		this.service.getAll().then((a) => {
			this.data = a;
		});
	}

	public display(t: SearchOptions, userLocation, Location) {
		return this.data.filter((thing: { name: string }) =>
			thing.name.toLowerCase().includes(t.query.toLowerCase()))
		.filter(((thing1: { category : number }) =>
			true));
	}

}
