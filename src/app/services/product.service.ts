import { Injectable } from '@angular/core';
import { Product } from '../entity/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [];
  constructor() {
    this.products.push(new Product(1, 'Android', 25000, 'url1', 'Android mobile'));
    this.products.push(new Product(2, 'Apple', 250000, 'url2', 'Apple mobile'));
    this.products.push(new Product(3, 'Samsung', 30000, 'url3', 'Samsung mobile'));
    this.products.push(new Product(4, 'OnePlus', 35000, 'url4', 'OnePlus mobile'));
    this.products.push(new Product(5, 'Nokia', 15000, 'url5', 'Nokia mobile'));
    this.products.push(new Product(6, 'Sony', 45000, 'url6', 'Sony mobile'));
    this.products.push(new Product(7, 'Google', 55000, 'url7', 'Google Pixel mobile'));
    this.products.push(new Product(8, 'Xiaomi', 20000, 'url8', 'Xiaomi mobile'));
    this.products.push(new Product(9, 'Huawei', 25000, 'url9', 'Huawei mobile'));
    this.products.push(new Product(10, 'LG', 18000, 'url10', 'LG mobile'));

  }

  addNewProduct(newProduct: Product): boolean {
    this.products.push(newProduct);
    console.log(this.products);
    return true;
  }

  getAllProducts(): Product[] {
    return this.products;
  }

  deleteProductById(idNumber?: number): Product[] {
    // this.products.splice(this.products.findIndex(item => item.id === idNumber), 1)
    this.products = this.products.filter(item => (item.id != idNumber));
    return this.products;
  }

  updateProduct(updatedProduct: Product): boolean {
    const index = this.products.findIndex(product => product.id === updatedProduct.id);
    if (index === -1) {
      console.error('Product not found');
      return false; // Product not found
    }
    this.products[index] = updatedProduct;
    console.log('Product updated:', updatedProduct);
    return true;
  }
}
