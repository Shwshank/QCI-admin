import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../service/ProjectService';
declare var $: any;

@Component({
  selector: 'app-board-quick-summary',
  templateUrl: './board-quick-summary.component.html',
  styleUrls: ['./board-quick-summary.component.scss']
})

export class BoardQuickSummaryComponent implements OnInit {

  flag: any = false ;
  header: any = [];
  response: any = [];
  sub: any;
  sub1: any;
  id: any;
  empType: any;
  departmentName: any;
  month: any;
  desc: any;

  constructor(private route: ActivatedRoute, private router: Router, private projectService: ProjectService) {

    this.sub1 = this.projectService.emitGetSummaryData.subscribe(res=>{
      // console.log(res);
      this.header = res.header;
      this.response = res.content;
      this.flag = true;
      this.display();
      this.departmentName = localStorage.getItem('department');
    });
  }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.desc = params['desc'];
      this.month = params['month'];
      this.empType = params['empType'];
      this.projectService.getSummaryData(this.desc, this.month, this.empType);
    });
    // this.projectService.getBoardTable();
  }

  display() {
    if(this.flag) {
      $(document).ready(function() {

        // Setup - add a text input to each footer cell

        $("#exampleFormResponse").DataTable({
          aaSorting: [],
          responsive: true,
          dom: 'lBfrtip',
          buttons: [
              'csv'
          ]
        });

        var table = $('#exampleFormResponse').DataTable();

      });
    }
  }

  getEmployeeDetails(id){
    this.router.navigate(['/home/employee'], { queryParams: { id: id } });
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

}
