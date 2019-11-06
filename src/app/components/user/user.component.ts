import { Component } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
  // template: '<h2>John Doe</h2>'
})
export class UserComponet {
  // Properties
  // firstName = "Nasirul";
  firstName : string; // using types and calling from constructor 
  lastName : string;
  age : number;
  // this is an object literal
  address;

  // Methods
  constructor() {
    // this.sayHello(); // passing in the method
    // // Lets declare another method
    // console.log(this.age);
    // this.hasBirthday(); // caling the hasBirthday() function
    // console.log(this.age); // calling it again

    // Using Types
    this.firstName = 'Nasirul';
    this.lastName = 'Islam';
    this.age = 24;

    this.address = {
      street: '214/B',
      city: 'Dhaka',
      country: 'Bangladesh'
    }
  }

  // sayHello() {
  //   console.log(`Hello ${this.firstname} ${this.lastName}`);
  // }

  // hasBirthday() {
  //   this.age += 1;
  // }

  // we can also use methods for string interpolation 
  showAge() {
    return this.age+2;
  }
}
