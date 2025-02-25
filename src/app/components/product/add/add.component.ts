import { Component } from '@angular/core';
import { Product } from '../../../entity/product';
import {FormsModule} from '@angular/forms'
import { ProductService } from '../../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add',
  imports: [FormsModule, CommonModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  newProduct:Product=new Product();
  constructor(private productService: ProductService){}
  addProduct(){
    console.log(this.newProduct);
    this.productService.addNewProduct(this.newProduct);
    this.newProduct=new Product(); //allocate memory for next product
  }
}
