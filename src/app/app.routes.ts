import { Routes } from '@angular/router';
import { ResumeTemp2Component } from '../templates/resume-temp-2/resume-temp-2.component';
import { ResumeTemp1Component } from '../templates/resume-temp-1/resume-temp-1.component';

export const routes: Routes = [
    {path:'' ,pathMatch:'full', redirectTo:'temlate1'},
    {path: 'temlate1', 
        component:ResumeTemp1Component
    },
    {path: 'temlate2', 
        component:ResumeTemp2Component
    }
];
