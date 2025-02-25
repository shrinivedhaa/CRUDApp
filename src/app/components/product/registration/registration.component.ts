import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../../../entity/product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']  // Corrected to plural 'styleUrls'
})
export class RegistrationComponent {
  // Creating the profile form with validation
  newProduct: Product = new Product();
  constructor(private productService: ProductService) { }
  
  profileForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.minLength(4)]),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')]), // Price validation
    url: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9-._~:/?#[\\]@!$&\'()*+,;=]+(\\.[a-zA-Z]{2,})+$')]), // URL pattern validation
    description: new FormControl('', [Validators.required, Validators.minLength(5)]),  // At least 5 characters for description
  });

  addProduct() {
    console.log(this.newProduct);
    this.productService.addNewProduct(this.newProduct);
    this.newProduct = new Product(); //allocate memory for next product
  }
}
