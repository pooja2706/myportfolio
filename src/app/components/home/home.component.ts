import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  listofbuttons: string[]=['Home', 'About', 'Skills', 'Languages', 'Projects', 'Education', 'Experience', 'Contact', 'Social Media'];
  state: string='home'

  constructor(){

  }
}
