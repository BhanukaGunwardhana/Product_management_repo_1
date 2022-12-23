import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Model/product.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  @Output() submitevent=new EventEmitter();
  @Input() boolupdate_addproduct: any
  @Input() idForUpdateProduct_addproduct: any
  productFrom = this.fb.group({
    productName: ['', Validators.required],
    description: ['', Validators.required],
    category: ['', Validators.required],
    brand : ['', Validators.required],
    expiredDate: ['', Validators.required],
    manufacturedDate: ['', Validators.required],
    batchNumber: ['', Validators.required],
    unitPrice: ['', [Validators.required, Validators.min(1)]],
    quantity: ['', [Validators.required, Validators.min(50)]],
  });

  isDataUploading = false;
  private id: any 

  constructor(private fb: FormBuilder,
    private productService :ProductService) {}

  ngOnInit(): void {}

   get f() {
    return this.productFrom.controls;
  }

  onSubmit() {
    
    const values = this.productFrom.value as unknown as Product;
    values.createdDate = new Date().toDateString();
    this.isDataUploading = true;
    if (this.boolupdate_addproduct==true) {
      this.productService.addProduct(values as Product).subscribe((res) => {
        debugger;
        this.isDataUploading = false;
        this.productFrom.reset();
      });
      
    } else {
      this.productService.updateProduct(this.idForUpdateProduct_addproduct,values as Product).subscribe((res)=>{
        debugger;
        this.isDataUploading=false;
        this.productFrom.reset();
      });
      
    }
    
    this.submitevent.emit();

  }
  canceliingProductForm(){
    this.productFrom.reset();
  }
  initializingIdforupdating(){

  }
  

}
