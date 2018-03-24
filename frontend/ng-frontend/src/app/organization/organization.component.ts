import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../services/organization.service';

@Component({
  selector: 'organization',
  providers: [ OrganizationService ],
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  private service;
  private organization;

  constructor(service: OrganizationService) {
    this.service = service;
  }

  ngOnInit() {
    this.service.getOrganization(69).then((org) => {
      this.organization = org;
    })
  }

}
