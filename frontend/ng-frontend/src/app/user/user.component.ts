import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'user',
  providers: [ ProfileService ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
private service;
private data;

constructor(service: ProfileService) {
    this.service = service;
  }

}
