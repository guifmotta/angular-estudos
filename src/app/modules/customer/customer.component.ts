import { Component, OnInit } from '@angular/core';
import { Customer } from '@interfaces/customer';
import { tap } from 'rxjs';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  public customers!: Customer[];
  public displayedColumns: string[] = ['id', 'name', 'age', 'gender', 'actions'];

  constructor(
    private _customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this._customerService.getCustomerList().pipe(
      tap(customers => {
        this.customers = customers;
      })
    ).subscribe();
  }

}
