import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../service/ProjectService';
declare var $: any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  boardName: any = "NABET";
  details: any = [{bid:""},{bid:""},{bid:""},{bid:""}];
  sub: any ;
  sub1: any ;
  id: any;
  empType: any;

  constructor(private route: ActivatedRoute, private router: Router, private projectService: ProjectService) {

    this.sub1 = this.projectService.emitEmployeeInfo.subscribe(res=>{
      this.details = res;
      localStorage.setItem('department', this.details[3].value);
    })

    this.empType = localStorage.getItem('empType');

  }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.projectService.getEmployeeDetails(this.id);

    });
    // this.projectService.getEmployeeInfo();
  }

  editEmployee() {
    $('#employeeModal').modal('show');
  }

  

  editSaveEmployee() {
    this.projectService.editSaveEmployee(this.id, this.details);
    $('#employeeModal').modal('hide');
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.sub1.unsubscribe();
  }
}
