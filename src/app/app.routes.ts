import { Routes } from '@angular/router';
import { Webpage } from './webpage/webpage';
import { Login } from './login/login';
import { Errorpage } from './errorpage/errorpage';
import { Homepage } from './homepage/homepage';
import { SignUp } from './signup/signup';

export const routes: Routes = [
    { path: '', component: Login },
    { path: 'signup', component: SignUp },
    { path: 'web', component: Webpage },
    { path: 'error', component: Errorpage },
    { path: 'home', component: Homepage},
    { path: '**', redirectTo: 'error' }
];
