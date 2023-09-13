import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = "Product";
  private apiUrl = "https://localhost:44368/api";
  private updateurl: string = "";
  constructor(private http: HttpClient) { }

  public getProducts() : Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiUrl}/${this.url}`);
  }

  public updateProduct(product: Product) : Observable<Product[]>{
    this.updateurl = this.apiUrl + "/" + this.url +"?Id="+product.id+"&Name="+product.name+"&Quantity="+product.quantity+"&Price="+product.price; 
    return this.http.put<Product[]>(this.updateurl, product);
  }

  public createProduct(product: Product) : Observable<Product[]>{
    return this.http.post<Product[]>(`${this.apiUrl}/${this.url}`, product);
  }

  public deleteProduct(product: Product) : Observable<Product[]>{
    return this.http.delete<Product[]>(`${this.apiUrl}/${this.url}/${product.id}`);
  }
}
