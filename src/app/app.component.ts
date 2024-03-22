import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HomeComponent,
    AboutComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myportfolio';
  listofbuttons: string[]=['Home', 'About', 'Skills', 'Languages', 'Projects', 'Education', 'Experience', 'Contact', 'Social Media'];
  state: string='About'

  constructor(){}
  navigationCall(clickstate: string){
    this.state=clickstate;
    console.log(this.state);

  }
}
