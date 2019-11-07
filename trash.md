# Angularapp (Angular Udemy Course)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


### Trash codes used in other things 
```js
  //  Properties
   firstName = "Nasirul";
   firstName : string;  //using types and calling from constructor 
   lastName : string;
   age : number;
    // this is an object literal
   address;

    // this is another type 
    // it's called any, means it can be anything  
   foo: any;  
   hasKid: boolean;
   numberArray: number[];
   stringArray: string[];
    mixed array
   mixedArray: any[];
   myTuple: [string, number, boolean];

   This is previuos constructor data 
   this.sayHello();  passing in the method
    Lets declare another method
   console.log(this.age);
   this.hasBirthday();  caling the hasBirthday() function
   console.log(this.age);  calling it again

   Using Types
   this.firstName = 'Nasirul';
   this.lastName = 'Islam';
   this.age = 24;

   this.address = {
     street: '214/B',
     city: 'Dhaka',
     country: 'Bangladesh'
   }

   this.foo = true;
   this.hasKid = false;
   this.numberArray = [1,2,3];
   this.stringArray = ['hello', 'world'];
   this.mixedArray = [true, undefined, 'hello'];
   this.myTuple = ['hello', 4, true];

   console.log(this.addNumbers(2, 3));

   sayHello() {
     console.log(`Hello ${this.firstname} ${this.lastName}`);
   }

   hasBirthday() {
     this.age += 1;
   }

  //  we can also use methods for string interpolation 
   showAge() {
     return this.age+2;
   }

   addNumbers(num1: number, num2: number): number{
     return num1+num2;
   }

```