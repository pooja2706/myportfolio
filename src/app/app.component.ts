import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    LanguagesComponent,
    ProjectsComponent,
    EducationComponent,
    ExperienceComponent,
    ContactComponent

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
