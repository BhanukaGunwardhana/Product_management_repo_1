import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Model/product.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrls: ['./showproduct.component.css']
})
export class ShowproductComponent implements OnInit {

  choosedProductById!: Product; 
  constructor(private productservice:ProductService, private route:ActivatedRoute) {
   
   }

  ngOnInit(): void {
    let id=this.route.snapshot.paramMap.get('id')
    this.productservice.getProductById(id).subscribe(((res)=> {
      this.choosedProductById=res.data;
    }));
  }

}
