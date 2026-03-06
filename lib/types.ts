export type Product = {
  id: number;
  category: string;
}

export type OrderProduct = {
  id: number;
  discountedTotal: number
}

export type Order_cat = {
  products: OrderProduct[]
}

enum JobRole {
  Admin = 'admin',
  Manager = 'manager'
}
export type User = {

  id: number;
  firstName: string;
  lastName: string;
  image: string;
  email: string;
  phone: string;
  gender: string;
  age: number;
  username: string;
  address: {

    address: string;
    city: string;
    country: string
    postalCode: string
    state: string
  }
  role: JobRole;
  bank: {
    cardExpire: string
    cardNumber: string
    cardType: string
    currency: string
  }
}


export type ExtendedUser = User & {
  status: "active" | "suspended" | "pending";
  createdAt : string;
  emailVerified: boolean;
  lastLogin: string;
};