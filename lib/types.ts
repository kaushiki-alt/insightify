export type Product = {
  id: number;
  category:string;
}

export type OrderProduct = {
  id: number;
  discountedTotal: number
}

export type Order_cat = {
  products: OrderProduct[]
}
