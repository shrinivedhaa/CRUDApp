import { Component } from '@angular/core';
import { StarPipe } from '../../pipes/star.pipe';

@Component({
  selector: 'app-demo',
  imports: [StarPipe],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  title='demo component'
}
