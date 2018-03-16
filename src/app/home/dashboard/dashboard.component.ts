import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../service/ProjectService';
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  details: any =[];
  summaryData: any = [];
  boardTable: any = [];
  sub1: any;
  sub2: any;

  constructor(private router: Router, private projectService: ProjectService) {

    this.sub1 = this.projectService.emitSummaryData.subscribe(res=>{
      this.summaryData = res;
    });

    this.sub2 = this.projectService.emitBoard.subscribe(res=>{
      this.boardTable = res;
    })

    this.details=[
       {'type': 'ID No.', 'value': ''},
       {'type': 'Name', 'value': ''},
       {'type': 'Designation', 'value': ''},
       {'type': 'QCI/BOARD', 'value': ''},
       {'type': 'Date of Birth', 'value': ''},
       {'type': 'Mode of appointment', 'value': ''},
       {'type': 'Mob No :', 'value': ''},
       {'type': 'E-mail (QCI)', 'value': ''},
       {'type': 'E-mail ', 'value': ''},
       {'type': 'Emoluments(In lacs p.a.)', 'value': ''},
       {'type': 'Date of initial joining to the organization', 'value': ''},
       {'type': 'Date of confirmation to the post', 'value': ''},
       {'type': 'Due date of confirmation to the post', 'value': ''},
       {'type': "Father's Name", 'value': ''},
       {'type': 'Date of tenure completion of contract / deputation', 'value': ''},
       {'type': 'Address', 'value': ''},
       {'type': 'Date of present Promotion to the present designation/joining to the present designation',
        'value': ''},
       {'type': 'Adhar Card No', 'value': ''},
       {'type': 'PAN NO', 'value': ''},
       {'type': 'PASSPORT NO', 'value': ''},
       {'type': 'Remarks', 'value': ''},
       {'type': 'I CARD VALIDITY', 'value': ''},
       {'type': 'Qualification', 'value': ''},
       {'type': 'Experience', 'value': ''}
    ]

  }

  ngOnInit() {
    // this.projectService.getBoard();
    this.projectService.getSummary();
    this.projectService.getHomePageData();
  }

  getBoard(board){
    this.router.navigate(['/home/board'], { queryParams: { id: board } });
  }

  addAnEmployee(){
    $('#employeeModal').modal('show');
  }

  addEmployee() {
    this.projectService.addEmployee(this.details);
    $('#employeeModal').modal('hide');
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }

}
