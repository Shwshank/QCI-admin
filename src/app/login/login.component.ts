import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: any;
  password: any;

  constructor(private router: Router) { }

  ngOnInit() {
    let temp = localStorage.getItem("token");
    if(temp === "true") {
      this.router.navigate(['/home']);
    }
  }

  login() {
    if(this.email === "admin@qcin.org" && this.password === "1234") {
      this.router.navigate(['/home']);
      localStorage.setItem("token","true");
    } else {
      alert('Invalid Credentials!');
      this.email = "";
      this.password = "";
    }
  }

}
