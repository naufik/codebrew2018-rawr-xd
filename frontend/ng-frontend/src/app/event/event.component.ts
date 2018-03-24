import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-event',
  providers: [ EventService ],
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  private service;
  private event

  constructor(service: EventService) {
    this.service = service;
  }

  ngOnInit() {
    this.service.getEvent(69).then((e) => {
      this.event = e;
    })
  }

}
