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

  constructor(private topicService: TopicService) { }

  ngOnInit(): void {
    this.topicService.getAllTopic().subscribe({
      next: data => {
        this.topics = data;
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

}