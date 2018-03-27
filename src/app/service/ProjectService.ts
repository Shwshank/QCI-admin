import { EventEmitter, Injectable, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { APIService } from './APIService';

@Injectable()
export class ProjectService {

  graphData : any;
  notificationData : any;
  board : any;
  summary : any;
  boardTable : any;
  newEmployeeData : any;
  employeeInfo : any;

  emitGraphData = new EventEmitter<any>();
  emitNotification = new EventEmitter<any>();
  emitBoard = new EventEmitter<any>();
  emitSummaryData = new EventEmitter<any>();
  emitBoardTable = new EventEmitter<any>();
  emitNewEmployeeData = new EventEmitter<any>();
  emitEmployeeInfo = new EventEmitter<any>();
  emitNotificationTableSummary = new EventEmitter<any>();
  emitDepartmentCategory = new EventEmitter<any>();
  emitEmployeeType = new EventEmitter<any>();
  emitGetSummaryData = new EventEmitter<any>();
  emitGetEmpTypeData = new EventEmitter<any>();
  emitForm1 = new EventEmitter<any>();
  emitForm2 = new EventEmitter<any>();
  emitForm3 = new EventEmitter<any>();

  constructor(private apiService: APIService) {

    this.boardTable = {header: ['S.no', 'Employee Id', 'Name', 'Position', 'Renew Time', 'Details'], response : [
      [{type:'id', value:'111'}, {type:'name', value:'Sam'}, {type:'pos', value:'M T'}, {type:'renew', value:'10'}, {type:'details', value:'111'}],
      [{type:'id', value:'111'}, {type:'name', value:'Sam'}, {type:'pos', value:'M T'}, {type:'renew', value:'7'}, {type:'details', value:'111'}],
      [{type:'id', value:'111'}, {type:'name', value:'Sam'}, {type:'pos', value:'M T'}, {type:'renew', value:'6'}, {type:'details', value:'111'}],
      [{type:'id', value:'111'}, {type:'name', value:'Sam'}, {type:'pos', value:'M T'}, {type:'renew', value:'5'}, {type:'details', value:'111'}],
      [{type:'id', value:'111'}, {type:'name', value:'Sam'}, {type:'pos', value:'M T'}, {type:'renew', value:'4'}, {type:'details', value:'111'}],
      [{type:'id', value:'111'}, {type:'name', value:'Sam'}, {type:'pos', value:'M T'}, {type:'renew', value:'3'}, {type:'details', value:'111'}],
      [{type:'id', value:'111'}, {type:'name', value:'Sam'}, {type:'pos', value:'M T--'}, {type:'renew', value:'2'}, {type:'details', value:'111'}],
      [{type:'id', value:'112'}, {type:'name', value:'Tom'}, {type:'pos', value:'M T++'}, {type:'renew', value:'1'}, {type:'details', value:'112'}]
    ]};

    this.notificationData = {
      latest : [
        {id:'100211', name:'Dev Sharma', c_expire:'2nd April, 2018', star:true, reminder:'11th March, 2018'},
        {id:'211014', name:'Jhon Doe', c_expire:'4th April, 2018', star:false, reminder:''},
        {id:'110234', name:'Swati Soodh', c_expire:'4th April, 2018', star:true, reminder: ''},
        {id:'212191', name:'Rayman Kathuriya', c_expire:'5th April, 2018', star:false, reminder: ''},
      ],
      read : [
        {id:'010211', name:'rDev Sharma', c_expire:'2nd April, 2018', star:true},
        {id:'011014', name:'rJhon Doe', c_expire:'4th April, 2018', star:true},
        {id:'010234', name:'rSwati Soodh', c_expire:'4th April, 2018', star:true},
        {id:'012191', name:'rRayman Kathuriya', c_expire:'5th April, 2018', star:true},
      ],
      reminder : [
        {id:'810211', name:'rrDev Sharma', c_expire:'2nd April, 2018', star:true, reminder:'11th March, 2018'},
        {id:'811014', name:'rrJhon Doe', c_expire:'4th April, 2018', star:true, reminder:'11th March, 2018'},
        {id:'810234', name:'rrSwati Soodh', c_expire:'4th April, 2018', star:true, reminder:'11th March, 2018'},
        {id:'812191', name:'rrRayman Kathuriya', c_expire:'5th April, 2018', star:true, reminder:'11th March, 2018'},
      ]
    }

    this.summary = [{time:'21st Feb, 2018', summary:''}, {time:'23rd Feb, 2018', summary:''}, {time:'27th Feb, 2018', summary:''}, {time:'1st March, 2018', summary:''}, {time:'7th Feb, 2018', summary:''}];

    this.board = [
      {department:'NABET', spc:'Mark', employees:'143', id:""},
      {department:'NABH', spc:'Thoron', employees:'89', id:""},
      {department:'PPID', spc:'Sam', employees:'213', id:""},
      {department:'ZED', spc:'Ram', employees:'119', id:""},
      {department:'NABL', spc:'Ram', employees:'67', id:""}];

    this.employeeInfo = [{type:'Designation', value:'Director'}, {type:'Board', value:'ZED'}, {type:'Date Of Birth', value:'11/07/75'}, {type:'Mode Of Appointment', value:'Regular'}, {type:'Mode Of Appointment', value:'Regular'}, {type:'Mode Of Appointment', value:'Regular'}];
  }

  getHomePageData() {
    this.apiService.GetHomePageData().subscribe(res=>{
      // console.log(res);
      this.emitNotification.emit(res.notifications);

    })
  }

  getBoardEmployees(id, empType) {
    this.apiService.GetBoardEmployees(id, empType).subscribe(res=>{
      // console.log(res);
      this.emitBoardTable.emit(res);
    });
  }

  getEmployeeDetails(id) {
    this.apiService.GetEmployeeDetails(id).subscribe(res=>{
      // console.log(res);
      this.emitEmployeeInfo.emit(res.data);
    });
  }

  editSaveEmployee(id, data){
    this.apiService.EditSaveEmployee(id, data).subscribe(res=>{
      // console.log(res);
    })
  }

  addEmployee(data){
    this.apiService.AddEmployee(data).subscribe(res=>{
      // console.log(res);
    })
  }

  notification(type,date,id) {
    this.apiService.Notification(type,date,id).subscribe(res=>{
      // console.log(res);
    });
  }

  getGraph(){
    this.emitGraphData.emit(this.graphData);
  }

  getNotification(){
    this.emitNotification.emit(this.notificationData);
  }

  getSummary() {
    this.emitSummaryData.emit(this.summary);
  }

  getBoard(){
    this.emitBoard.emit(this.board);
  }

  getBoardTable(){
    this.emitBoardTable.emit(this.boardTable);
  }

  getNewEmployeeData(){
    this.emitBoard.emit(this.newEmployeeData);
  }

  getEmployeeInfo() {
    this.emitEmployeeInfo.emit(this.employeeInfo);
  }

  getNotificationTableSummary(id) {

    this.apiService.GetNotificationTableSummary(id).subscribe(res=>{
      // console.log(res);
      this.emitForm1.emit(res.form);
      this.emitEmployeeType.emit(id);
      this.emitNotificationTableSummary.emit({notificationHeader: res.monthwise_header, notificationContent: res.monthwise});
      this.emitDepartmentCategory.emit({departmentHeader:res.boardwise_header, content: res.boardwise});
    });
  }

  getSummaryData(desc, month, empType) {
    this.apiService.GetSummaryData(desc, month, empType).subscribe(res=>{
      // console.log(res);
      this.emitGetSummaryData.emit({ header: res.header, content: res.employees });
    })
  }

  getEmpTypeData(empType) {
    this.apiService.GetEmpTypeData(empType).subscribe(res=>{
      // console.log(res);
      this.emitGetEmpTypeData.emit({ header: res.header, content: res.employees });
    })
  }

}
