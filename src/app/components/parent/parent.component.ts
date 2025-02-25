import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  parentMessage = 'Hello from Parent!';
  childMessage = '';

  receiveMessage(message:string){
    this.childMessage = message;
  }
}
