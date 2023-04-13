import { Component, OnInit } from '@angular/core';
import { Idea } from '../models/idea';
import { Topic } from '../models/topic';
import { TopicService } from '../_services/topic.service';

@Component({
  selector: 'app-board-staff',
  templateUrl: './board-staff.component.html',
  styleUrls: ['./board-staff.component.css']
})
export class BoardStaffComponent implements OnInit {


  topics?: Topic[];
  msg?: String;
  currPage = 0;
  totalPages = 0;
  constructor(private topicService: TopicService) { }

  ngOnInit(): void {
    this.getAllTopic(this.currPage);
  }
  getAllTopic(pageNo:number) {
    this.topicService.getAllTopic(pageNo).subscribe({
      next: data => {
        console.log(data);
        this.totalPages = data.totalPages;
        this.topics = data.content;
      },
      error: err => {
        if (err.error) {
          try {
            const res = JSON.parse(err.error);
            this.topics = res.message;
          } catch {
            this.msg = `Error with status: ${err.status} - ${err.statusText}`;
          }
        } else {
          this.msg = `Error with status: ${err.status}`;
        }
      }
    });
  }
  isGreaterThenFinal(arg0: Date): boolean {
    let currentDate = new Date()
    if (arg0 > currentDate) {
      return true;
    }
    return false;
    }

  isLowerClosure(arg0: Date): any {
    let curr = new Date();
    if (curr < arg0) {
      return true;
    }
      return false;
    }
  isBetween(arg0: Date, arg1: Date) {
    let curr = new Date();
    console.log(`curr ${curr},start ${arg0}, end ${arg1}, == ${curr > arg0}`);
    
    if (curr >= arg0 && curr < arg1){
      return true;      
    }
    return false;
  }
  goNextPage() {
    this.currPage += 1;
    this.getAllTopic(this.currPage);
    console.log("next page");
    
    }
    goPreviousPage() {
    if(this.currPage > 0){
      this.currPage -= 1;
      this.getAllTopic(this.currPage);
    }else {
      this.currPage = 0;
    }
    
    console.log("pre page");
    }
}