import { Product } from "@interfaces/product";

export class ProductsMock {

  public static products: Product[] = [
    {
      id: 1,
      description: "Product 1",
      qty: 120,
      code: "C0001"
    },
    {
      id: 2,
      description: "Product 2",
      qty: 151,
      code: "C0002"
    },
    {
      id: 3,
      description: "Product 3",
      qty: 58,
      code: "C0003"
    },
    {
      id: 4,
      description: "Product 4",
      qty: 259,
      code: "C0004"
    }
  ];

}