import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { BoardComponent } from './home/board/board.component';
import { EmployeeComponent } from './home/employee/employee.component';
import { EmployeeOnlyComponent } from './home/employee-only/employee-only.component';
import { BoardQuickSummaryComponent } from './home/board-quick-summary/board-quick-summary.component';
import { BoardEmployeeTypeComponent } from './home/board-employee-type/board-employee-type.component';


export const routes: Routes = [

  { path: 'home', component:  HomeComponent, children: [
    { path: '', component: DashboardComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'board', component: BoardComponent},
    { path: 'employee', component: EmployeeComponent},
    { path: 'employeeOnly', component: EmployeeOnlyComponent},
    { path: 'categorySummary', component: BoardQuickSummaryComponent},
    { path: 'employeeType', component: BoardEmployeeTypeComponent},
    { path: '**', redirectTo:'/dashboard' }
  ]},

  { path: 'login', component:  LoginComponent },
  { path: '**', redirectTo:'/login' }

];
