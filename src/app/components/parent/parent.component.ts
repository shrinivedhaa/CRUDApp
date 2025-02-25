import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { Product } from '../../entity/product';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent, CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit{
  parentMessage = 'Hello from Parent!';
  childMessage = '';
  products:Product[]=[];
  product?:Product;

  constructor(private productService: ProductService){}
  selectProduct(product:Product){
    this.product=product;
  }
  receiveMessage(message:string){
    this.childMessage = message;
  }

  ngOnInit(): void {
    this.products=this.productService.getAllProducts();
  }
}
