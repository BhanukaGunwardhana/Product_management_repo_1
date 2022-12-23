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
/*public rowindex: number | undefined ;
isLoading: boolean =false;
showAddproduct: boolean=false;
showHiedit : boolean=false;
updatedrow! : Product;*/

//constructor(private hiService:ProductService, private router : Router) { }

  /*ngOnInit(): void {
    //this.getProduct();
  }
  
  public products: Product[] = [];
  
  isloading(){
    alert(this.isLoading);
  }
  
  hideaddproduct() {
    this.showAddproduct=false;
    }
  showaddproduct() {
    this.showAddproduct=true;
    this.showHiedit=false;
    }
    showhiedit(){
      this.showHiedit=true;
      this.showAddproduct=false;
    }
    hidehieditparent(){
      this.showHiedit=false;
    }
  selectProduct(value: number,product : Product) {
      this.rowindex=value;
      this.updatedrow=product;

    }
  refresh(){
        //throw new Error('Method not implemented.');
        this.getProduct();
    }
  getProduct(){
    
        this.isLoading=true;
        this.hiService.getProducts().subscribe((res)=>{
          this.products=res.data;
          this.isLoading=false;
        })
        
      }
  navigatetonextpage(product : Product){
        this.router.navigate(['/viewproduct-component',product.productname]);
      }*/
      showAddProduct!: boolean;
      isLoading: boolean = false;
      showtable: boolean = false;
    
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
  


   

}
