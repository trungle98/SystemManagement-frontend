import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TopicService } from 'src/app/_services/topic.service';
import { Topic } from 'src/app/models/topic';

@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.css']
})
export class CreateTopicComponent {
  topic = new Topic(0,'',new Date(), new Date())
  constructor(private topicService: TopicService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }
    ngOnInit(): void {
      console.log("init create page");
      
      this.activatedRoute.queryParams.subscribe(params => {
        let isDone = params['topic'];
        console.log("default: ",this.topic, "update: ", params['topic']);
        
        this.topic = Object.assign(this.topic, JSON.parse(isDone));
        console.log("assign: ", this.topic);
        
      });
    }


msg?:String;
onSubmit(form: NgForm) {
  console.log(this.topic);
  
  this.topicService.saveTopic(this.topic).subscribe({
    next: data => {
      console.log("data",data);
      this.msg="true";
      console.log("msg:", this.msg);
      this.router.navigate(["/topic/view/"], {queryParams: {"saveAlert":this.msg}});
    },
    error: err => {console.log("err", err)
      this.msg = "false";
      console.log("msg errr:", this.msg);
      if (err.error) {
      } else {
      }
      this.router.navigate(["/topic/view/"], {queryParams: {"saveAlert":this.msg}});
    }
  });
}
}
