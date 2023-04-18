import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { HomeService } from '../_services/home.service';
import { Idea } from '../models/idea';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;
  mostViewIdeas?:Idea[];
  mostLikeIdeas?:Idea[];
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getTopLikeIdea()
    this.getTopViewsIdea()
  }

  getTopLikeIdea() {
    this.homeService.getTopLikeIdea().subscribe({
      next: data => {
        console.log(data);
        this.mostLikeIdeas = data;
      },
      error: err => {
        if (err.error) {
          try {
            const res = JSON.parse(err.error);
          } catch {
          }
        } else {
        }
      }
    });
  }

  getTopViewsIdea() {
    this.homeService.getTopViewsIdea().subscribe({
      next: data => {
        console.log(data);
        this.mostViewIdeas = data;
      },
      error: err => {
        if (err.error) {
          try {
            const res = JSON.parse(err.error);
          } catch {
          }
        } else {
        }
      }
    });
  }
}
