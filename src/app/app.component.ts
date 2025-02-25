import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {  NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CRUDApp';
}
