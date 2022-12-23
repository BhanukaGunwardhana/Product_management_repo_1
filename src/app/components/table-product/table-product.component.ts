import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/Model/product.model';

@Component({
  selector: 'app-table-product',
  templateUrl: './table-product.component.html',
  styleUrls: ['./table-product.component.css']
})
export class TableProductComponent implements OnInit {

  @Output() boolvaluevent=new EventEmitter();
  public rowIndex!: number;
  @Input() productarray: any
  
  public show_table:boolean | undefined;

  constructor() { }

  ngOnInit() {
  }
  //public products: Product[] = [];

  public selectProduct(selectedRow: number) {
    this.rowIndex = selectedRow;
  }
  public closetable(){
    this.boolvaluevent.emit();
  }
}
