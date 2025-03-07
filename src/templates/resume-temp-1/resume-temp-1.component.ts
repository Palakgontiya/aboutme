import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';

@Component({
  selector: 'app-resume-temp-1',
  standalone: true,
  imports: [HeaderComponent,HeroSectionComponent],
  templateUrl: './resume-temp-1.component.html',
  styleUrl: './resume-temp-1.component.scss'
})
export class ResumeTemp1Component {

   direction:string = 'RTL'

   changeDirection(){
     if(this.direction == 'RTL'){
       this.direction = 'LTR';
     }else{
       this.direction = 'RTL';
     }
   }

}
