export interface User {
  firstName: string,
  lastName: string,
  age?: number,
  address?: {
    street?: string,
    city?: string,
    country?: string
  },
  image?: string,
  isActive?: boolean
}

// '?' means they are optional 
// we need to declare export so that it can be accessed globaly