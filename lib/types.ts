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

export type Address = {
  address: string;
  city: string;
  country: string
  postalCode: string
  state: string
}

export type Bank = {
  cardExpire: string
  cardNumber: string
  cardType: string
  currency: string
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
  address: Address;
  role: JobRole;
  bank: Bank;
}


export type ExtendedUser = User & {
  status: "active" | "suspended" | "pending";
  createdAt: string;
  emailVerified: boolean;
  lastLogin: string;
};

export type Column<T> = {
  key: keyof T & string | string;
  label: string;
  sortable?: boolean;
}