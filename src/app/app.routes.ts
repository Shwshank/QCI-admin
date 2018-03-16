import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { BoardComponent } from './home/board/board.component';
import { EmployeeComponent } from './home/employee/employee.component';

export const routes: Routes = [

  { path: 'home', component:  HomeComponent, children: [
    { path: '', component: DashboardComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'board', component: BoardComponent},
    { path: 'employee', component: EmployeeComponent},
    { path: '**', redirectTo:'/dashboard' }
  ]},
  { path: 'login', component:  LoginComponent },
  { path: '**', redirectTo:'/login' }

];
