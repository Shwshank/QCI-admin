import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { NotificationComponent } from './home/notification/notification.component';
import { GraphComponent } from './home/graph/graph.component';
import { OrganisationComponent } from './home/organisation/organisation.component';
import { EmployeeComponent } from './home/employee/employee.component';
import { BoardComponent } from './home/board/board.component';
import { ProjectService } from './service/ProjectService';
import { APIService } from './service/APIService';
import { EmployeeType1Component } from './home/employee-type1/employee-type1.component';
import { EmployeeType2Component } from './home/employee-type2/employee-type2.component';
import { EmployeeType3Component } from './home/employee-type3/employee-type3.component';
import { SummaryTableComponent } from './home/summary-table/summary-table.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    NotificationComponent,
    GraphComponent,
    OrganisationComponent,
    EmployeeComponent,
    BoardComponent,
    EmployeeType1Component,
    EmployeeType2Component,
    EmployeeType3Component,
    SummaryTableComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgxEchartsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  providers: [
    ProjectService,
    APIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
