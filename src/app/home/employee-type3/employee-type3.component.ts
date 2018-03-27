import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../service/ProjectService';
declare var $: any;

@Component({
  selector: 'app-employee-type3',
  templateUrl: './employee-type3.component.html',
  styleUrls: ['./employee-type3.component.scss']
})
export class EmployeeType3Component implements OnInit {

  empType : any;
  sub1: any;
  sub2: any;
  form: any;

  updateFlag : any;
  flag : any = 0;
  FormData : any;
  files : any;
  formData = new FormData();

  constructor(private projectService: ProjectService, private router: Router) {
    this.sub1 = this.projectService.emitEmployeeType.subscribe(res=>{
      this.empType = res;
    });

    this.sub2 = this.projectService.emitForm1.subscribe(res=>{
      this.form = res;
    });
  }

  ngOnInit() {
  }

  getEmpType() {
    this.router.navigate(['/home/employeeType'], { queryParams: { empType: this.empType }});
  }

  addEmployee() {
    $('#employeeModal3').modal('show');
  }

  saveNewEmployee() {
    this.projectService.addEmployee(this.form);
    $('#employeeModal3').modal('hide');
  }

  uploadExcelModal() {
    $('#uploadExcelModal3').modal('show');
  }

  uploadExcel($event) {
    this.updateFlag = true;
    this.flag=1;
    this.formData.delete('file');
    this.files = $event.target.files || $event.srcElement.files;
    let file = this.files[0];
    this.formData = new FormData();
    this.formData.append('file', file);
    console.log(this.formData);
    $('#uploadExcelModal3').modal('show');
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }
}
