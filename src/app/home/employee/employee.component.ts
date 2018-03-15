import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../service/ProjectService';
declare var $: any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  boardName: any = "NABET";
  details: any = [];
  sub1: any ;

  constructor(private projectService: ProjectService) {

    this.sub1 = this.projectService.emitEmployeeInfo.subscribe(res=>{
      this.details = res;
    })
    
  }

  ngOnInit() {
    this.projectService.getEmployeeInfo();
  }

  editEmployee() {
    $('#employeeModal').modal('show');
  }

  showData() {
    console.log(this.details);
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }
}
