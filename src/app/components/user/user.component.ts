import { Component, OnInit } from "@angular/core";

import { User } from '../../models/User';

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
  // template: '<h2>John Doe</h2>'
})
export class UserComponet implements OnInit {
  // Properties 
  // Here we are calling it from User interface
  user: User;

  // Methods
  constructor() {

  }

  ngOnInit() {
    this.user = {
      firstName: 'John',
      lastName: 'Doe',
      age: 26,
      address: {
        street: '214/B',
        city: 'Dhaka',
        country: 'Bangladesh'
      }
    }
  }
}

