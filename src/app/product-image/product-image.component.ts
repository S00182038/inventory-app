import { Component, OnInit } from '@angular/core';
import { Product } from '../vendor/product';

@Component({
  selector: 'app-product-image',
  // tslint:disable-next-line:use-input-property-decorator
  inputs: ['product'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {'class': 'ui small image'},
  template:
    `
  <img class="product-image" [src] = "product.imageUrl">
  `,
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {
  product: Product;
  ngOnInit() {
  }

}
