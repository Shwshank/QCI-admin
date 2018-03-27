import { Routes } from '@angular/router';

import { AuthGuard } from './service/zauthGuard';
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
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    { path: 'board', component: BoardComponent, canActivate: [AuthGuard]},
    { path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard]},
    { path: 'employeeOnly', component: EmployeeOnlyComponent, canActivate: [AuthGuard]},
    { path: 'categorySummary', component: BoardQuickSummaryComponent, canActivate: [AuthGuard]},
    { path: 'employeeType', component: BoardEmployeeTypeComponent, canActivate: [AuthGuard]},
    { path: '**', redirectTo:'/dashboard' }
  ], canActivate: [AuthGuard]},

  { path: 'login', component:  LoginComponent },
  { path: '**', redirectTo:'/login' }

];
