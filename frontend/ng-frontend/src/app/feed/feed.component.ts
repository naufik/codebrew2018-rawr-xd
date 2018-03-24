import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '../services/event.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'feed',
  templateUrl: './feed.component.html',
  providers: [ EventService ],
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

	@Input() public user;
	private events: EventService;
	private people: ProfileService;
	private data;

	constructor(service: EventService, pservice: ProfileService) {
		this.events = service;
		this.people = pservice;
	}
	
	ngOnInit() {
		this.refresh();
	}

	public refresh() {
		this.people.getEventHistory(this.user).then((data) => {
			this.data = data;
		});
	}

	public feed(user: number) {
		return this.data;
	}

}
