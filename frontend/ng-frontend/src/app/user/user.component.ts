import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'user',
  providers: [  ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private service: ProfileService;
  @Input() public userId: number;
  @Input() public style: string;
  public user;

  constructor(service: ProfileService) {
    this.service = service;
  }

  ngOnInit() {
    this.service.getUserData(this.userId).then((u) => {
      this.user = u;
    })
  }
}
