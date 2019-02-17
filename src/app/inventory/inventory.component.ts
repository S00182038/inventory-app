import { Component, OnInit } from '@angular/core';
import { Product } from '../vendor/product';

@Component({
  selector: 'app-inventory',
  template:
    `
    <div class="app-inventory">
    <app-product-list
    [productList] = "products">
    (onProductSelected)="productWasSelected($event)">
    </app-product-list>
    </div>
    `,
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  products: Product[];
  constructor() {
    this.products = [new Product(
      'MYSHOES',
      'Black Running Shoes',
      '/assets/images/products/black-shoes.jpg',
      ['Men', 'Shoes', 'Running Shoes'],
      109.99),
    // tslint:disable-next-line:no-unused-expression
    new Product(
      'NEATOJACKET',
      'Blue Jacket',
      '/assets/images/products/blue-jacket.jpg',
      ['Women', 'Apparel', 'Jackets & Vests'],
      238.99),
    // tslint:disable-next-line:no-unused-expression
    new Product(
      'NICEHAT',
      'A Nice Black Hat',
      '/assets/images/products/black-hat.jpg',
      ['Men', 'Accessories', 'Hats'],
      29.99)];
  }
  productWasSelected(product: Product): void {
    console.log('product cliked : ', product);
  }
ngOnInit() {
}

}
