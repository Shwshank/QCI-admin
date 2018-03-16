import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../service/ProjectService';
declare var $: any;

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  flag: any = false ;
  header: any = [];
  response: any = [];
  sub: any;
  sub1: any;
  id: any;

  constructor(private route: ActivatedRoute, private router: Router, private projectService: ProjectService) {

    this.sub1 = this.projectService.emitBoardTable.subscribe(res=>{
      // console.log(res);
      this.header = res.header;
      this.response = res.employees;
      this.flag = true;
      this.display();
    });
  }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.projectService.getBoardEmployees(this.id);
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
