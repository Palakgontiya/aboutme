import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResumeTemp1Component } from '../templates/resume-temp-1/resume-temp-1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ResumeTemp1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-project';
  direction:string = 'RTL'

  changeDirection(){
    if(this.direction == 'RTL'){
      this.direction = 'LTR';
    }else{
      this.direction = 'RTL';
    }
  }
}
