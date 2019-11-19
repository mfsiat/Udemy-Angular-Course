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

  // defining the user inside the ngOnIt
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
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 34,
        address: {
          street: '214/A',
          city: 'Dhaka',
          country: 'Bangladesh'
        }
      },
      {
        firstName: 'Wasif',
        lastName: 'Shikder',
        age: 26,
        address: {
          street: '214/C',
          city: 'Dhaka',
          country: 'Bangladesh'
        }
      }
    ];
  }

}
