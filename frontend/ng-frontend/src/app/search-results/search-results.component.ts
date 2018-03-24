import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '../services/event.service';

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
  selector: 'results',
  templateUrl: './search-results.component.html',
  providers: [ EventService ],
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

	public display(t: SearchOptions) {
		return this.data.filter((thing: {name: string}) => thing.name.toLowerCase().includes(t.query.toLowerCase()));
	}

}
