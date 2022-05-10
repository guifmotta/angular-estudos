import { Component, OnInit } from '@angular/core';
import { Product } from '@interfaces/product';
import { tap } from 'rxjs';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public products!: Product[];
  public displayedColumns: string[] = ['id', 'description', 'qty', 'code'];

  constructor(
    private _productService: ProductService
  ) { }

  ngOnInit(): void {
    this._productService.getProductList().pipe(
      tap(products => {
        this.products = products;
      })
    ).subscribe()
  }

}
