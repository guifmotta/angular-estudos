import { Customer } from "@interfaces/customer";

export class CustomersMock {

  public static customers: Customer[] = [
    {
      id: 1,
      name: "Geralt of Rivia",
      age: 98,
      gender: "Male"
    },
    {
      id: 2,
      name: "Sonya Blade",
      age: 32,
      gender: "Female"
    },
    {
      id: 3,
      name: "Terry Bogard",
      age: 31,
      gender: "Male"
    },
    {
      id: 4,
      name: "Chun Li",
      age: 31,
      gender: "Female"
    }
  ];

}