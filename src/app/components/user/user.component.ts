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
  // firstName : string; // using types and calling from constructor 
  // lastName : string;
  // age : number;
  // // this is an object literal
  // address;

  // // this is another type 
  // // it's called any, means it can be anything  
  // foo: any;  
  // hasKid: boolean;
  // numberArray: number[];
  // stringArray: string[];
  // // mixed array
  // mixedArray: any[];
  // myTuple: [string, number, boolean];

  // Properties 
  // Here we are calling it from User interface
  user: User;

  // Methods
  constructor() {
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

interface User {
  firstName: string,
  lastName: string,
  age: number,
  address: {
    street: string,
    city: string,
    country: string
  }

}

  // This is previuos constructor data 
  // this.sayHello(); // passing in the method
  // // Lets declare another method
  // console.log(this.age);
  // this.hasBirthday(); // caling the hasBirthday() function
  // console.log(this.age); // calling it again

  // Using Types
  // this.firstName = 'Nasirul';
  // this.lastName = 'Islam';
  // this.age = 24;

  // this.address = {
  //   street: '214/B',
  //   city: 'Dhaka',
  //   country: 'Bangladesh'
  // }

  // this.foo = true;
  // this.hasKid = false;
  // this.numberArray = [1,2,3];
  // this.stringArray = ['hello', 'world'];
  // this.mixedArray = [true, undefined, 'hello'];
  // this.myTuple = ['hello', 4, true];

  // console.log(this.addNumbers(2, 3));

  // sayHello() {
  //   console.log(`Hello ${this.firstname} ${this.lastName}`);
  // }

  // hasBirthday() {
  //   this.age += 1;
  // }

  // we can also use methods for string interpolation 
  // showAge() {
  //   return this.age+2;
  // }

  // addNumbers(num1: number, num2: number): number{
  //   return num1+num2;
  // }