import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../entity/product';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-child',
  imports: [JsonPipe],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() message!: string;
  @Output() notifyParent = new EventEmitter<string>();
  @Input() selectedProduct?: Product;

  sendMessage(){
    this.notifyParent.emit('Message from Child!');
  }
}
