import { Routes } from '@angular/router';
import { Webpage } from './webpage/webpage';
import { Login } from './login/login';
import { Errorpage } from './errorpage/errorpage';

export const routes: Routes = [{
    path: '',component: Webpage
},
{path: 'login', component:Login },
{path:'error',component:Errorpage},
{path: '**', redirectTo: 'error' }
];
