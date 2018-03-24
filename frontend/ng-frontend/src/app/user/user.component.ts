import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'user',
  providers: [ ProfileService ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
private service;
private user;
  constructor(service: ProfileService) {
    this.service = service;
  }

  ngOnInit() {
    this.service.getUser(69).then((u) => {
      this.user = u;
    })
  }

}
