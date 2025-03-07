import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface ActionBtnI {
  name: string;
  type: 'border' | 'flat' | 'solid';
  navigate_url?: string;
  modal_name?: string;
  action?: (type: string) => void;
}

interface HeaderI {
  action_btn: ActionBtnI[];
}

interface TamplateI {
  logo: string;
  organization_name: string;
  header: HeaderI

}

@Injectable({
  providedIn: 'root',
})
export class FakeApiService {
  constructor() {}

  getTemplateData(): Observable<TamplateI>{
    const fakeData: TamplateI = {
      logo: 'https://media.istockphoto.com/id/1412438498/vector/modern-square-tech-logo-design.jpg?s=1024x1024&w=is&k=20&c=c5ATEVnoLEQ1yL0l1gl_s0FrgBhIpOSy7mc-wKSIyFw=',
      organization_name:'template2',
      header: {
        action_btn: [
          {
            name: 'Mentorship',
            type: 'flat',
            navigate_url: '/temlate1',
          },
          {
            name: 'Say Hello',
            type: 'border',
            modal_name: 'settingsModal',
          }
        ],
      }
    }

    return of(fakeData);

  }
}
