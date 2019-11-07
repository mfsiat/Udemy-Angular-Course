export interface User {
  firstName: string,
  lastName: string,
  age: number,
  address: {
    street: string,
    city: string,
    country: string
  }
}

// we need to declare export so that it can be accessed globaly