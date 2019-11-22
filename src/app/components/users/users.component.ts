import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended:  boolean = true;
  // suppose we are working with api 
  // or we need to fetch some data 
  // so we want to check on the users fetched or not so we can use this 
  loaded: boolean = false;
  constructor() { }

  // defining the user inside the ngOnIt
  ngOnInit() {
    setTimeout(() => {
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
      
      this.loaded = true;

    }, 2000);


    // this.showExtended = false; // this means on ngIf it goes false and ul doesn't show

    // this.addUser(
    //   {
    //     firstName: 'Sujon',
    //     lastName: 'Hossain',
    //     age: 26,
    //     address: {
    //       street: '214/D',
    //       city: 'Dhaka',
    //       country: 'Bangladesh'
    //     }
    //   }
    // );
  }

  // just a normal method on js which pushes objects inside the array 
  // takes in user which is the type of User
  addUser(user: User) {
    this.users.push(user);
  }

}
