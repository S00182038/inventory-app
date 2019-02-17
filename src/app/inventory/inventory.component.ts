import { Component, OnInit } from '@angular/core';
import { Product } from '../vendor/product';

@Component({
  selector: 'app-inventory',
  template:
    `
    <div class="app-inventory">
    <h1>{{ product.name }}</h1>
    <span>{{ product.sku }}
    </div>
    `,
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  product: Product;
  constructor() {
    this.product = new Product('MYSHOES',
      'Black Runing Shoes',
      '/assets/images/products/black-shoes.jpg',
      ['Men', 'Shoes', 'Runing Shoes'],
      109.99);
  }

  ngOnInit() {
  }

}
