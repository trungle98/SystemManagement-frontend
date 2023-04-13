import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Idea } from 'src/app/models/idea';
import { IdeaReaction } from 'src/app/models/idea-reaction';
import { ReactionByTopic } from 'src/app/models/reaction-by-topic';
import { IdeaService } from 'src/app/_services/idea.service';
import { ReactionService } from 'src/app/_services/reaction.service';
import { StorageService } from 'src/app/_services/storage.service';
import { Reaction } from 'src/app/models/reaction';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-idea',
  templateUrl: './view-idea.component.html',
  styleUrls: ['./view-idea.component.css']
})
export class ViewIdeaComponent {

  ideas?: IdeaReaction[];
  reaction?: ReactionByTopic[];
  ideaReaction?: [];
  msg?: String;
  currPage = 0;
  totalPages = 0;
  showAlert = false;
  showDoneAlert= false;
  constructor(private ideaService: IdeaService,
    private reactionService: ReactionService,
    private route: ActivatedRoute,
    private storageService: StorageService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private router: Router) { }

    ngOnInit(): void {
      this.getIdeaByTopic(this.route.snapshot.params["topicId"]);
      this.activatedRoute.queryParams.subscribe(params => {
        let isDone = params['saveAlert'];
        console.log("isDone", isDone);
        
        if (isDone=="true") {
          this.showTempAlert("done") // display the message as an alert
        }else if(isDone==="false"){
          this.showTempAlert("error")
        }
      });
      
    }

  getIdeaByTopic(topicId: number): void {
    this.ideaService.getIdeaById(topicId).subscribe({
      next: data => {
        this.ideas = data;
        console.log(data);
        
      },
      error: err => {console.log(err)
        if (err.error) {
          this.msg = JSON.parse(err.error).message;
        } else {
          this.msg = "unknow error" ;
        }
      }
    });
  }

  reactionIdea(isLike:boolean, ideaId:String) {
    
    let userId = this.storageService.getUser().id;
    console.log("access reaction component with id: ", userId, ideaId);
    let reaction = new Reaction(isLike,ideaId,userId);
    this.reactionService.saveReaction(reaction).subscribe({
      next: data => {
        console.log(data);
        
      },
      error: err => {console.log(err)
        if (err.error) {
          this.msg = JSON.parse(err.error).message;
        } else {
          this.msg = "unknow error" ;
        }
      }
    });
    window.location.reload();
  }
  backToList() {
    this.location.back();
    }
  goToCreateIdea() {
    let topicId = this.route.snapshot.params["topicId"]
      this.router.navigate(['idea/create'], {queryParams: {"topicId": topicId}});
    }
    goNextPage() {
      this.currPage += 1;
      this.getIdeaByTopic(this.currPage);
      console.log("next page");
      
      }
      goPreviousPage() {
      if(this.currPage > 0){
        this.currPage -= 1;
        this.getIdeaByTopic(this.currPage);
      }else {
        this.currPage = 0;
      }
      
      console.log("pre page");
      }
      showTempAlert(type:String) {
        if(type === "error") {
        this.showAlert = true;
        }else{
          this.showDoneAlert = true;
        }
        setTimeout(() => {
          this.showAlert = false;
          this.showDoneAlert = false;
        }, 5000); // Set the time for the alert to display (in milliseconds)
      }
}
