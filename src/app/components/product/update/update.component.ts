import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../entity/product';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
	selector: 'app-update',
	imports: [FormsModule, NgIf],
	templateUrl: './update.component.html',
	styleUrl: './update.component.css'
})

export class UpdateComponent {
	product: Product = new Product(0, '', 0, '', ''); // Initialize an empty product
	productId: number =0;
  
	constructor(
	  private route: ActivatedRoute,
	  private productService: ProductService,
	  private router: Router
	) {}
  
	ngOnInit(): void {
	  // Get the product ID from the route parameter
	  this.productId = +this.route.snapshot.paramMap.get('id')!;
	  
	  // Find the product based on the ID
	  const foundProduct = this.productService.getAllProducts().find(
		(prod) => prod.id === this.productId
	  );
  
	  if (foundProduct) {
		this.product = foundProduct;
	  }
	}
  
	updateProduct(): void {
	  // Call the service method to update the product
	  const success = this.productService.updateProduct(this.product);
	  
	  if (success) {
		console.log('Product updated successfully!');
		// Navigate back to the product list
		this.router.navigate(['/products']);
	  } else {
		console.error('Failed to update product');
	  }
	}
}
