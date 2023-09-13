import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularApp';
  products: Product[] = [];
  productToEdit?: Product;

  constructor(private productService: ProductService){}

  ngOnInit() : void {
    this.productService.getProducts().subscribe((result: Product[]) => (this.products = result));
  }

  updateProductList(products: Product[]){
    this.productService.getProducts().subscribe((result: Product[]) => (this.products = result));

  }
  initNewProduct(){
    this.productToEdit = new Product();
  }

  editProduct(product: Product){
    this.productToEdit = product;
  }
}
