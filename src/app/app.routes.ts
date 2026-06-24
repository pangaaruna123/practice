import { Routes } from '@angular/router';
import { Webpage } from './webpage/webpage';
import { Login } from './login/login';
import { Errorpage } from './errorpage/errorpage';
import { Homepage } from './homepage/homepage';
import { SignUp } from './signup/signup';
import { Weather } from './weather/weather';
import { Selectmovieseat } from './selectmovieseat/selectmovieseat';
import { Movielogin } from './movielogin/movielogin';
import { Moviesignup } from './moviesignup/moviesignup';

export const routes: Routes = [
    { path: 'login', component: Login },
    { path: 'signup', component: SignUp },
    { path: 'web', component: Webpage },
    { path: 'error', component: Errorpage },
    { path: 'home', component: Homepage},
    {path: 'weather', component: Weather},
     {path:'',component:Moviesignup},
    {path:'movielogin',component:Movielogin},
    { path: 'selectmovieseat', component: Selectmovieseat },
    { path: '**', redirectTo: 'error' }
];
