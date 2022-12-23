import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Model/product.model';
import { ProductService } from 'src/app/service/product.service';
import { Route, Router } from '@angular/router';
//import {Stock} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

      showAddProduct!: boolean;
      isLoading: boolean = false;
      showtable: boolean = false;
      boolupdate: boolean | undefined
      idForUpdateProduct_product: any
    
      constructor(private productService: ProductService) {}
    
      ngOnInit(): void {
        this.getProducts();
      }
      public products: Product[] = [];
    
      /*public selectProduct(selectedRow: number) {
        this.rowIndex = selectedRow;
      }*/
    
      showAddProducts() {
        this.showAddProduct = true;
      }
    
      hideAddProducts() {
        this.showAddProduct = false;
      }
    
      refresh() {
        this.getProducts();
      }
    
      getProducts() {
        this.isLoading = true;
        this.productService.getProducts().subscribe((res) => {
          this.products = res.data;
          this.isLoading = false;
        });
      }
      enabletablecomponent(){
        this.showtable=true;
      }
      disabletablecomponent(){
        this.showtable=false;
      }
      enableupdate($event: any){
        this.idForUpdateProduct_product=$event
        this.boolupdate=true
      }
  


   

}
