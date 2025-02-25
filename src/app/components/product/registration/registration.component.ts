import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']  // Corrected to plural 'styleUrls'
})
export class RegistrationComponent {
  // Creating the profile form with validation
  profileForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.minLength(4)]),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl('', [Validators.required, Validators.pattern('^\d+(\.\d{1,2})?$')]), // Pattern for valid price (e.g., 10.99)
    url: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9-._~:/?#[\\]@!$&\'()*+,;=]+(\\.[a-zA-Z]{2,})+$')]), // URL pattern validation
    description: new FormControl('', [Validators.required, Validators.minLength(5)]),  // At least 5 characters for description
  });

  // Method to add the product
  addProduct() {
    if (this.profileForm.valid) {
      console.log('Product added:', this.profileForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
