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
  @Output() public goto: EventEmitter<number> = new EventEmitter<number>();
  public user;

  constructor(service: ProfileService) {
    this.service = service;
  }

  ngOnInit() {
    this.service.getUserData(this.userId).then((u) => {
      this.user = u;
    })
  }

  public goToUserPage(){
  	this.goto.emit(this.userId);
  }
}
