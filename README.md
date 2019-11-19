# Angular Udemy Course

- All components services and models goes to app folder

- Typscript is the **superset** of javascript

- It allows us to do static typing classes and other stuffs

- in angular we use _typscript_ extension files

- which get converted to _JS_ files

- AppModule is the core module in our application

- Its getting bootstrapped here

- on the environment folder we need to define _production_ and _development_ environment

- It's neccessery when we use different environment database

- on app.module.ts where the appmodules are present

- on creation of every new component service or module, we will have to bring it into this file and we need to include it into our **NgModule**

- main.ts >> AppModules >> app.module.ts >> main appComponent gets bootstrapped from app.component

### What will we learn

![](https://github.com/mfsiat/Udemy-Angular-Course-/blob/master/assets/we_will_learn.PNG)

### Core Features

![](https://github.com/mfsiat/Udemy-Angular-Course-/blob/master/assets/core_features.PNG)

### TypeScript

- **superset** of JS
- created by **microsoft**
- compiles to plain **JS** code
- includes **ES6**

  #### Features

  - **Static** Typing
  - Object Classes
  - Modules
  - let/const
  - Other ES6

  #### Compiler

  - compiles .ts to .js
  - installed with npm
  - used by **angular**

### Components

![](https://github.com/mfsiat/Udemy-Angular-Course-/blob/master/assets/components.PNG)

### Properties and Methods

```typescript
export class UserComponet {
  // Properties
  firstname = "John";
  lastName = "Doe";
  age = 30;

  // Methods
  constructor() {
    this.sayHello(); // passing in the method
  }

  sayHello() {
    console.log(`Hello ${this.firstname} ${this.lastName}`);
  }
}
```

### String interpolation

- we use double curli braces for string interpolation like **{{}}**

### Using types

- First we need to define this types on properties
- then we declare them on constructor
- and call them from the html file

```typescript
  firstName : string; // using types and calling from constructor
  lastName : string;
  age : number;
  address;

  // Methods
  constructor() {
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
```

- Types in **typescript**, we can also assign types to function parameters in return values

```typescript
export class UserComponet {
  // properties
  foo: any;
  hasKid: boolean;
  numberArray: number[];
  stringArray: string[];
  // mixed array
  mixedArray: any[];
  myTuple: [string, number, boolean];

  // method
  constructor() {
    this.foo = true;
    this.hasKid = false;
    this.numberArray = [1, 2, 3];
    this.stringArray = ["hello", "world"];
    this.mixedArray = [true, undefined, "hello"];
    this.myTuple = ["hello", 4, true];

    console.log(this.addNumbers(2, 3));
  }

  addNumbers(num1: number, num2: number): number {
    return num1 + num2;
  }
}
```

### Interface

- To declare interface we can follow the following

```typescript
export class userComponent {
  // properties
  user: User;

  // method
  constructor() {
    this.user = {
      firstName: "John",
      lastName: "Doe",
      age: 26,
      address: {
        street: "214/B",
        city: "Dhaka",
        country: "Bangladesh"
      }
    };
  }
}

// interface
interface User {
  firstName: string;
  lastName: string;
  age: number;
  address: {
    street: string;
    city: string;
    country: string;
  };
}
```

- But to write good codes we need to place the interface separately
- We can create a model folder and place our interface on there

### How to create a component manually

- we can use the cli to create component manually

  > ng g c components/users --spec=false

- here **g** stands for **genarate** **c** for **component** and **--spec=false** for not creating the .spec files.

### LifeCycle Method

- we can also use the life cycle method to implement interface only by using some specfic ways.
  > first import the OnInit
  > then create a method outside the constructor and just add the properties.

  ``` typescript
  import { Component, OnInit } from "@angular/core";

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
  ```

### Template Syntax

- basicaly adds logic 
- there are many template syntax in **Angular**
- here we always should specify the property with its type suppose 
> users: User[] 
- here this means that **users** is User[] type and the bracket means it is an array
- for **ngFor**
```html
<!-- here we are looping through the users array 
and we are outputting the firstName -->
<h2>Users</h2>
<ul>
  <li *ngFor="let user of users">
    {{ user.firstName }}
  </li>
</ul>
```
- For defining a custom template we write <ng-template #noUser></ng-template>
- to define a logic we use **'*'**
