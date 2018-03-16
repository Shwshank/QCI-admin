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

  constructor(private route: ActivatedRoute, private router: Router, private projectService: ProjectService) {

    this.sub1 = this.projectService.emitEmployeeInfo.subscribe(res=>{
      this.details = res;
    })

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

  showData() {
    console.log(this.details);
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
