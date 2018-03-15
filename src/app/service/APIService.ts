import { Http, Response, Headers, RequestOptions,BaseRequestOptions, RequestMethod} from '@angular/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class APIService {

  projectURL: string = 'http://192.168.15.187:8000';
  // projectURL: string = 'https://qcitech.org:8083';

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

}
