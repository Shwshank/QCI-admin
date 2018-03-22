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
  temp3: any;
  sub1 : any;

  constructor(private projectService: ProjectService) {

    this.sub1 = this.projectService.emitNotification.subscribe(res=>{
      
      this.latest = res.latest;
      this.read = res.read;
      this.reminder = res.reminder;
    });
  }

  ngOnInit() {
    // this.projectService.getNotification();
  }

  l_star(i, id){
    if(this.latest[i].star){
      this.latest[i].star = false;
    } else {
      this.latest[i].star = true;
    }
    this.projectService.notification("star","",id);
  }

  l_right(i, id){
    let temp = this.latest[i];
    this.latest.splice(i,1);
    this.read.push(temp);
    this.projectService.notification("right","",id);
  }

  l_clock(i, id){
    $('#reminderModal').modal('show');
    this.temp1 = this.latest[i];
    this.temp2 = i;
    this.temp3 = id;

  }

  l_setReminder() {
    $('#reminderModal').modal('hide');
    let temp = this.temp1;
    temp.reminder = this.date;
    this.temp1 = temp;
    this.latest.splice(this.temp2,1);
    this.reminder.push(this.temp1);
    this.projectService.notification("clock", this.date, this.temp3);
  }

  r_star(i, id){
    if(this.read[i].star){
      this.read[i].star = false;
    } else {
      this.read[i].star = true;
    }
    this.projectService.notification("star","",id);
  }

  rr_star(i, id){
    if(this.reminder[i].star){
      this.reminder[i].star = false;
    } else {
      this.reminder[i].star = true;
    }
    this.projectService.notification("star","",id);
  }

  rr_right(i, id){
    let temp = this.reminder[i];
    this.reminder.splice(i,1);
    this.read.push(temp);
    this.projectService.notification("right","",id);
  }

  rr_clock(i, id){
    $('#reminderModal2').modal('show');
    this.temp1 = this.reminder[i];
    this.temp2 = i;
    this.temp3 = id;
  }

  rr_setReminder() {
    $('#reminderModal2').modal('hide');
    let temp = this.temp1;
    temp.reminder = this.date;
    this.temp1 = temp;
    this.reminder.splice(this.temp2,1);
    this.reminder.push(this.temp1);
    this.projectService.notification("clock", this.date, this.temp3);
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

}
