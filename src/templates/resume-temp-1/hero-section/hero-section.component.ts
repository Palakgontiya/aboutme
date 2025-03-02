import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent implements OnInit {

  @Input() direction:string = 'RTL';

  ngOnInit(){
    
  }

}
