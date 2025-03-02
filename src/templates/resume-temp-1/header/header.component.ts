import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

currentSection:string = 'Home';
@Input() direction:string = 'RTL';

ngOnInit(){}

navigateTo(section:string){
  this.currentSection = section;
}

}
