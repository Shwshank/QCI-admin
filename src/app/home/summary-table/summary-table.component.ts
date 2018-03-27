import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../service/ProjectService';

@Component({
  selector: 'app-summary-table',
  templateUrl: './summary-table.component.html',
  styleUrls: ['./summary-table.component.scss']
})
export class SummaryTableComponent implements OnInit {

  sub1: any;
  sub2: any;
  empType: any;
  headerArray: any = [];
  contentArray: any = [];

  constructor(private projectService: ProjectService, private router: Router) {
    this.sub1 = this.projectService.emitNotificationTableSummary.subscribe(res=>{
      this.headerArray = res.notificationHeader;
      this.contentArray = res.notificationContent;
      // console.log(res);
    });

    this.sub2 = this.projectService.emitEmployeeType.subscribe(res=>{
      this.empType = res;
    })
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

  getDetails(i,j,desc, month) {
    // console.log(i+", "+j+", "+desc+", "+month);
    this.router.navigate(['/home/categorySummary'], { queryParams: { desc:desc, month: month, empType: this.empType }});
  }
}
