import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../service/ProjectService';

@Component({
  selector: 'app-employee-type2',
  templateUrl: './employee-type2.component.html',
  styleUrls: ['./employee-type2.component.scss']
})
export class EmployeeType2Component implements OnInit {

  empType : any;
  sub1: any;

  constructor(private projectService: ProjectService, private router: Router) {
    this.sub1 = this.projectService.emitEmployeeType.subscribe(res=>{
      this.empType = res;
    });
  }

  ngOnInit() {

  }

  getEmpType() {
    this.router.navigate(['/home/employeeType'], { queryParams: { empType: this.empType }});
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

}
