import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  products : Product[];

  constructor(private productService : ProductService) {}

  ngOnInit() {
    // cargar productos
    this.obtainProducts()
    }

  private obtainProducts() {
    //consumir productos (suscribirnos)
    this.productService.obtainProductList().subscribe(
      (data  => {
        this.products = data;
       })
    );
  }
}
