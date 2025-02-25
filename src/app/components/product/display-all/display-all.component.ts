import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../entity/product';
import {  NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-display-all',
  imports: [NgFor, RouterLink],
  templateUrl: './display-all.component.html',
  styleUrl: './display-all.component.css'
})
export class DisplayAllComponent implements OnInit{
  products:Product[]=[];
  constructor(private productService:ProductService){}

  ngOnInit(): void {
    this.products=this.productService.getAllProducts();
    console.log(this.products);
  }

  deleteProduct(productId?:number){
    if(window.confirm("Do you want to delete this product?")){
      console.log("delete product id "+productId)
      this.products=this.productService.deleteProductById(productId);
    }
  }
}
