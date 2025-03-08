import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationAndExperienceComponent } from './education-and-experience/education-and-experience.component';

@Component({
  selector: 'app-resume-temp-1',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    AboutMeComponent,
    ProjectsComponent,
    EducationAndExperienceComponent
  ],
  templateUrl: './resume-temp-1.component.html',
  styleUrl: './resume-temp-1.component.scss'
})
export class ResumeTemp1Component implements OnInit {

   @Input() direction:string = 'RTL';

   ngOnInit(): void {
     
   }

}
