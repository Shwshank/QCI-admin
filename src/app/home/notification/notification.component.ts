import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../service/ProjectService';
declare var $: any;

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  latest : any = [];
  read : any = [];
  reminder : any = [];
  date : any;
  temp1: any;
  temp2: any;
  sub1 : any;

  constructor(private projectService: ProjectService) {

    this.sub1 = this.projectService.emitNotification.subscribe(res=>{
      console.log(res);
      this.latest = res.latest;
      this.read = res.read;
      this.reminder = res.reminder;
    });
  }

  ngOnInit() {
    // this.projectService.getNotification();
  }

  l_star(i){
    if(this.latest[i].star){
      this.latest[i].star = false;
    } else {
      this.latest[i].star = true;
    }
  }

  l_right(i){
    let temp = this.latest[i];
    this.latest.splice(i,1);
    this.read.push(temp);
  }

  l_clock(i){
    $('#reminderModal').modal('show');
    this.temp1 = this.latest[i];
    this.temp2 = i;
  }

  l_setReminder() {
    $('#reminderModal').modal('hide');
    let temp = this.temp1;
    temp.reminder = this.date;
    this.temp1 = temp;
    this.latest.splice(this.temp2,1);
    this.reminder.push(this.temp1);
  }

  r_star(i){
    if(this.read[i].star){
      this.read[i].star = false;
    } else {
      this.read[i].star = true;
    }
  }

  rr_star(i){
    if(this.reminder[i].star){
      this.reminder[i].star = false;
    } else {
      this.reminder[i].star = true;
    }
  }

  rr_right(i){
    let temp = this.reminder[i];
    this.reminder.splice(i,1);
    this.read.push(temp);
  }

  rr_clock(i){
    $('#reminderModal2').modal('show');
    this.temp1 = this.reminder[i];
    this.temp2 = i;
  }

  rr_setReminder() {
    $('#reminderModal2').modal('hide');
    let temp = this.temp1;
    temp.reminder = this.date;
    this.temp1 = temp;
    this.reminder.splice(this.temp2,1);
    this.reminder.push(this.temp1);
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

}
