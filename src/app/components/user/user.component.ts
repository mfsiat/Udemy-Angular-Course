import {Component} from '@angular/core'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
  // template: '<h2>John Doe</h2>'
})

export class UserComponet {
  // Properties 
  firstname = 'John';
  lastName = 'Doe';
  age = 30;

  // Methods 
  constructor() {
    this.sayHello(); // passing in the method
  }

  sayHello() {
    console.log(`Hello ${this.firstname} ${this.lastName}`);
  }
}