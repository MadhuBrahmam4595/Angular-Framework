import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { authGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home/home.component';
import { LandingComponent } from './landing/landing.component';
import { DahsboarComponent } from './dahsboar/dahsboar.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: 'auth/register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard]
  },
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'dashboard',
    component: DahsboarComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];
