import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddProductResponse } from '../Model/add-product-response.model';
import { GetProductResponse } from '../Model/get-product-response';
//import { Hiresponse } from '../Model/hi-response.model';
import { ProductResponse } from '../Model/product-response.model';
import { Product } from '../Model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private baseUrl = '';    //serverURL;

  constructor(private http: HttpClient) {}
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  addProduct(product: Product): Observable<AddProductResponse> {
    return this.http.post<AddProductResponse>(
      this.baseUrl + 'api/addproducts',
      product,
      this.httpOptions
    );
  }

  getProducts(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(this.baseUrl + 'api/getproducts');
  }
  getProductById(id: any): Observable<GetProductResponse>{
    return this.http.get<ProductResponse>('${this.baseUrl}api/getproductbyid/${id}');

  }
  updateProduct(id: any,product : Product): Observable<any>{
    return this.http.put<any>(this.baseUrl+'api/updateproduct/${id}', product);

  }
  deleteProduct(id: any): Observable<any>{
    return this.http.delete<any>(this.baseUrl+'api/deleteproduct/${id}');

  }
}
