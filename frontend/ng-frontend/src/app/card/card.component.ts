import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'result-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

	@Input() public event;
	constructor() { }

	ngOnInit() {
	}

}
