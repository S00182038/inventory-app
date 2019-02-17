import { Component, OnInit } from '@angular/core';
import { Product } from '../vendor/product';

@Component({
  selector: 'app-product-row',
  // tslint:disable-next-line:use-input-property-decorator
  inputs: ['product'],
  // tslint:disable-next-line:use-host-property-decorator
  host: { 'class': 'item' },
  template:
    `
  <app-product-image[product] = 'product'></app-product-image>
  <div class="content">
  <div class="header">{{ product.name }}</div>
  </div>
  `,
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {
  product: Product;

  ngOnInit() {
  }

}
