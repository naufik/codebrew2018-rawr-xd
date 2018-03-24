import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'user',
  providers: [  ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
private service: ProfileService;
public user;

  constructor(service: ProfileService) {
    this.service = service;
  }

  ngOnInit() {
    this.service.getAllUsers().then((u) => {
      this.user = u;
    })
  }

  public userData() {
    return JSON.stringify(this.user);
  }
}
