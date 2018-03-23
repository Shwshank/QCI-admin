import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../service/ProjectService';
declare var $: any;

@Component({
  selector: 'app-board-employee-type',
  templateUrl: './board-employee-type.component.html',
  styleUrls: ['./board-employee-type.component.scss']
})

export class BoardEmployeeTypeComponent implements OnInit {

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

    this.sub1 = this.projectService.emitGetEmpTypeData.subscribe(res=>{
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
      this.empType = params['empType'];
      this.projectService.getEmpTypeData(this.empType);
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
              'csv', 'pdf',
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
