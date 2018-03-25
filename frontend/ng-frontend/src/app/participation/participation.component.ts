import { Component, OnInit, Input, Output } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { EventService } from '../services/event.service';

@Component({
  selector: 'participation',
  templateUrl: './participation.component.html',
  providers: [ ProfileService ],
  styleUrls: ['./participation.component.css']
})
export class ParticipationComponent implements OnInit {

	@Input()
	public userId;

	public data;
	private profiles: ProfileService;

	constructor(service: ProfileService) {
		this.profiles = service;
	}

	public rand() {
		return 10 + Math.floor(Math.random()*40);
	}

	ngOnInit() {
		this.profiles.getEventHistory(this.userId).then((data: any[]) => {
			this.data = data.filter(thing => true);
		});
	}
}
