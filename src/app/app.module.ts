import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Product } from './product.model/product.model.component';
import { ProductListComponent } from './product-list/product-list.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ProductComponent } from './product/product.component';
import { PriceListComponent } from './price-list/price-list.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { ProductRowComponent } from './product-row/product-row.component';
import { VendorComponent } from './vendor/vendor.component';

@NgModule({
  declarations: [
    AppComponent,
    Product.ModelComponent,
    ProductListComponent,
    InventoryComponent,
    ProductComponent,
    PriceListComponent,
    ProductImageComponent,
    ProductRowComponent,
    VendorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
