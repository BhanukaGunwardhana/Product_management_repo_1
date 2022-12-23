import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
//import { HiComponent } from './components/hi/hi.component';
//import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient,HttpClientModule} from '@angular/common/http';
//import { HieditComponent } from './components/hiedit/hiedit.component';
//import { ViewproductComponent } from './components/viewproduct/viewproduct.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { TableProductComponent } from './components/table-product/table-product.component';
import { ShowproductComponent } from './components/showproduct/showproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductComponent,
    AddProductComponent,
    TableProductComponent,
    ShowproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
