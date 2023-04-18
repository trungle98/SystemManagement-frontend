import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IdeaService } from 'src/app/_services/idea.service';
import { TopicService } from 'src/app/_services/topic.service';
import { Topic } from 'src/app/models/topic';

@Component({
  selector: 'app-view-topic',
  templateUrl: './view-topic.component.html',
  styleUrls: ['./view-topic.component.css']
})
export class ViewTopicComponent {




  topics?: Topic[];
  msg?: String;
  currPage = 0;
  totalPages = 0;
  showAlert: any;
  constructor(private topicService: TopicService,
    private ideaService: IdeaService,
    private router: Router) { }

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
    getTopic(topicId: number) {
      this.topicService.getTopicById(topicId).subscribe({
        next: data => {
          console.log(data);
          let topic = data;
          this.router.navigate(['topic/create'], {queryParams: {"topic": topic}});
        },
        error: err => {
          if (err.error) {
            try {
            } catch {
              this.msg = `Error with status: ${err.status} - ${err.statusText}`;
            }
          } else {
            this.msg = `Error with status: ${err.status}`;
          }
        }
      });
      }
      detailTopic(arg0: any) {
      throw new Error('Method not implemented.');
      }
      deleteTopic(topicId: number) {
        this.topicService.delTopic(topicId).subscribe({
          next: data => {
            console.log(data);
            this.getAllTopic(0);
          },
          error: err => {
            if (err.error) {
              try {
              } catch {
                this.msg = `Error with status: ${err.status} - ${err.statusText}`;
              }
            } else {
              this.msg = `Error with status: ${err.status}`;
            }
          }
        });
      }
    goToCreateTopic() {
      this.router.navigate(['topic/create']);
    }
    download(topicId: number) {
        this.ideaService.exportIdeaByTopicId(topicId).subscribe(blob => {
          const a = document.createElement('a');
          const objectURL = URL.createObjectURL(blob)
          a.href = objectURL
          a.download = topicId+".xlsx"
          a.click()
          URL.revokeObjectURL(objectURL)
        })
    }
}
