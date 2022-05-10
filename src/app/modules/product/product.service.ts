import { Injectable } from '@angular/core';
import { Product } from '@interfaces/product';
import { Observable, of } from 'rxjs';
import { ProductsMock } from 'src/app/mocks/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  public getProductList() : Observable<Product[]> {
    return of(ProductsMock.products);
  }
}
