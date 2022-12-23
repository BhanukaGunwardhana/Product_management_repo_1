import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/Model/product.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-table-product',
  templateUrl: './table-product.component.html',
  styleUrls: ['./table-product.component.css']
})
export class TableProductComponent implements OnInit {


  @Output() boolvaluevent=new EventEmitter();
  @Output() boolvalueupdate=new EventEmitter();
  public rowIndex!: number;
  
  @Input() productarray: any
  
  public show_table:boolean | undefined;

  constructor(private productservice: ProductService) { }

  ngOnInit() {
  }
  //public products: Product[] = [];

  public selectProduct(selectedRow: number) {
    this.rowIndex = selectedRow;
  }
  public closetable(){
    this.boolvaluevent.emit();
  }
  enableupdating(id :any) {
    this.boolvalueupdate.emit(id);
    }
  deleteProduct(id:any){
    this.productservice.deleteProduct(id).subscribe(((res)=> {
      
    }));


  }
  
}
