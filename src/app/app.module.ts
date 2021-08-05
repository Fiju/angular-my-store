import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { NavComponent } from './nav/nav.component';
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';
import { CheckoutPanelComponent } from './checkout-panel/checkout-panel.component';
import { CartItemComponent } from './checkout-panel/cart-item/cart-item.component';
import { CheckoutFormComponent } from './checkout-panel/checkout-form/checkout-form.component';
import { CheckoutConfirmComponent } from './checkout-panel/checkout-confirm/checkout-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemComponent,
    NavComponent,
    ProductDetailComponent,
    CheckoutPanelComponent,
    CartItemComponent,
    CheckoutFormComponent,
    CheckoutConfirmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
