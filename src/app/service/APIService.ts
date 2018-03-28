import { Http, Response, Headers, RequestOptions,BaseRequestOptions, RequestMethod} from '@angular/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class APIService {

  projectURL: string = 'http://192.168.15.187:8000';
  // projectURL: string = 'https://qcitech.org:8084';

  userID : any = "";

  constructor( private http: Http) {}

  createAuthorizationHeader(headers: Headers) {
    this.userID = localStorage.getItem('token');
    // this.userID = "319424f5b8524ebe8188c2d40217c48c";
    headers.append('Authorization', this.userID);
  }

  Login(data) {
    return this.http.post(this.projectURL+'/login', data).map(res=>res.json());
  }

  AddNewProject(data: any){
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(this.projectURL+'/addProject', data,{headers: headers}).map(res=>res.json());
  }

  GetHomePageData(){
    return this.http.get(this.projectURL+'/getHomePage').map(res=>res.json());
  }

  GetBoardEmployees(id, empType){
    let data = new FormData();
    data.append('bid',id);
    data.append('empType',empType);
    return this.http.post(this.projectURL+'/getBoardEmployees',data).map(res=>res.json());
  }

  GetEmployeeDetails(id){
    let data = new FormData();
    data.append('eid',id);
    return this.http.post(this.projectURL+'/getEmployeeDetails',data).map(res=>res.json());
  }

  EditSaveEmployee(id, data1) {

    data1 = JSON.stringify(data1);
    data1 = JSON.parse(data1);
    data1 = JSON.stringify(data1);

    let data = new FormData();
    data.append('eid',id);
    data.append('data',data1);
    return this.http.post(this.projectURL+'/editEmployee',data).map(res=>res.json());
  }

  AddEmployee(data1) {

    data1 = JSON.stringify(data1);
    data1 = JSON.parse(data1);
    data1 = JSON.stringify(data1);

    let data = new FormData();
    data.append('data',data1);
    return this.http.post(this.projectURL+'/addEmployee',data).map(res=>res.json());
  }

  Notification(type,date,id) {

    let data = new FormData();
    data.append('type',type);
    data.append('date',date);
    data.append('id',id);
    return this.http.post(this.projectURL+'/notification',data).map(res=>res.json());
  }

  GetNotificationTableSummary(id) {
    let data = new FormData();
    data.append('id',id);
    return this.http.post(this.projectURL+'/getEmployeeType',data).map(res=>res.json());
  }

  GetSummaryData(desc, month, empType) {
    let data = new FormData();
    data.append('desc',desc);
    data.append('month',month);
    data.append('empType',empType);
    return this.http.post(this.projectURL+'/getEmployeesinMonth',data).map(res=>res.json());
  }

  GetEmpTypeData(empType) {
    let data = new FormData();
    data.append('empType',empType);
    return this.http.post(this.projectURL+'/getAllEmployees',data).map(res=>res.json());
  }

}
