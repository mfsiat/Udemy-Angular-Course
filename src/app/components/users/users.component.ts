import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 26,
        address: {
          street: '214/B',
          city: 'Dhaka',
          country: 'Bangladesh'
        }
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 26,
        address: {
          street: '214/B',
          city: 'Dhaka',
          country: 'Bangladesh'
        }
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 26,
        address: {
          street: '214/B',
          city: 'Dhaka',
          country: 'Bangladesh'
        }
      }
    ]
  }

}
