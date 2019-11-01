import { Component } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
  // template: '<h2>John Doe</h2>'
})
export class UserComponet {
  // Properties
  firstName = "Nasirul";
  lastName = "Islam";
  age = 30;
  // this is an object literal
  address = {
    street: "214/B Tejkuni Para",
    city: "Dhaka",
    state: "Bangladesh"
  };

  // Methods
  constructor() {
    // this.sayHello(); // passing in the method
    // // Lets declare another method
    // console.log(this.age);
    // this.hasBirthday(); // caling the hasBirthday() function
    // console.log(this.age); // calling it again
  }

  // sayHello() {
  //   console.log(`Hello ${this.firstname} ${this.lastName}`);
  // }

  // hasBirthday() {
  //   this.age += 1;
  // }
}
