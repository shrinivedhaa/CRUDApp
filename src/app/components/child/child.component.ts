import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() message!: string;
  @Output() notifyParent = new EventEmitter<string>();

  sendMessage(){
    this.notifyParent.emit('Message from Child!');
  }
}
