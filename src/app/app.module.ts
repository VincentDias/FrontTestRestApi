import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { ProductListComponent } from './pages/inventory/product-list/product-list.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignUpFormComponent } from './pages/sign-up/component/sign-up-form/sign-up-form.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    ProductListComponent,
    SignUpComponent,
    SignUpFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
