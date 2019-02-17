import { Component, OnInit } from '@angular/core';
import { Product } from '../vendor/product';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-product-list',
  // tslint:disable-next-line:use-input-property-decorator
  inputs: ['productList'],
  // tslint:disable-next-line:use-output-property-decorator
  outputs: ['onProductSelected'],
  template:
    `
   <div class="ui items">
   <app-product-row
   *ngFor="let myProduct of productList"
   [product] = "myProduct"
   (click) = 'clicked(myProduct)'
   [class.selected] = "isSelected(myProduct)
   >
   </app-product-row>
   </div>
  `,
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  productList: Product;
  onProductSelected: EventEmitter<Product>;
  private currentProduct: Product;
  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }
  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }

  ngOnInit() {
  }
}
