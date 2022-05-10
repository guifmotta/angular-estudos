import { Injectable } from '@angular/core';
import { Customer } from '@interfaces/customer';
import { Observable, of } from 'rxjs';
import { CustomersMock } from 'src/app/mocks/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  public getCustomerList() : Observable<Customer[]> {
    return of(CustomersMock.customers);
  }
}
