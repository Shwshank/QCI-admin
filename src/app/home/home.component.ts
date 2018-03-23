import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  id: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  search() {
    this.router.navigate(['/home/employeeOnly'], { queryParams: { id: this.id } });
    this.id="";
  }
}
