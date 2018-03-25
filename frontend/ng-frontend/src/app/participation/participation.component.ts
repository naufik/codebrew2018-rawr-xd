import { Component, OnInit, Input, Output } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { EventService } from '../services/event.service';

@Component({
  selector: 'participation.
  ',
  templateUrl: './participation.component.html',
  providers: [ ProfileService ],
  styleUrls: ['./participation.component.css']
})
export class ParticipationComponent implements OnInit {

	@Input()
	public person;

	public data;
	private profiles: ProfileService;

	constructor(service: ProfileService) {
		this.profiles = service;
	}

	ngOnInit() {
		this.profiles.getEventHistory(this.person).then((data: any[]) => {
			this.data = data.filter(thing => new Date(thing.date) < new Date());
		});
	}
}
