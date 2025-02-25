import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../entity/product';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../pipes/search.pipe';
import { ProductApiService } from '../../services/product-api.service';
import { SortPipe } from '../../pipes/sort.pipe';

@Component({
  selector: 'app-search-product',
  imports: [NgFor, FormsModule, SearchPipe, SortPipe, CommonModule],
  templateUrl: './search-product.component.html',
  styleUrl: './search-product.component.css'
})
export class SearchProductComponent implements OnInit {
  query: string = "";
  products: Product[] = [];
  apiProducts: any[] = [];
  originalProducts: Product[] = [];  // Store the original list
  sortColumn: keyof Product = 'name';  // Track the column that is being sorted
  sortDirection: string = 'asc';  // Default sort direction
  constructor(private productService: ProductService, private productApiService: ProductApiService) { }

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
    this.originalProducts = [...this.products];
    this.productApiService.getAllProductsOpenApi().subscribe(
      {
        next: (data) => {
          console.log(data);
          this.apiProducts=data;
        },
        error: error => console.log(error),
        complete() {
          console.log("Data subscribing complete");
        },
      }
    )
  }

  sortTable(column: keyof Product): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
  }

  resetSort(): void {
    // Reset to the original order of products
    this.products = [...this.originalProducts];  // Revert to original order
    this.sortColumn = 'name';  // Optional: Reset to default sorting column
    this.sortDirection = 'asc';  // Optional: Reset to ascending order
  }
}
