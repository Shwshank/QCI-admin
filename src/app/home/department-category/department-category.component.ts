import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../service/ProjectService';

@Component({
  selector: 'app-department-category',
  templateUrl: './department-category.component.html',
  styleUrls: ['./department-category.component.scss']
})
export class DepartmentCategoryComponent implements OnInit {

  headerArray = [];
  contentArray = [];
  sub1 : any;
  sub2 : any;
  empType : any;

  constructor(private projectService: ProjectService, private router: Router) {

    this.sub1 = this.projectService.emitDepartmentCategory.subscribe(res=>{
      this.headerArray = res.departmentHeader;
      this.contentArray = res.content;
      // console.log(res);
    });

    this.sub2 = this.projectService.emitEmployeeType.subscribe(res=>{
      this.empType = res;
    });

  }

  ngOnInit() {
  }

  getDetails(id, name) {
    // console.log(id+" - "+this.empType);
    localStorage.setItem('department', name);
    this.router.navigate(['/home/board'], { queryParams: { id: id, empType: this.empType  } });
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }
}
