import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Idea } from 'src/app/models/idea';
import { IdeaReaction } from 'src/app/models/idea-reaction';
import { ReactionByTopic } from 'src/app/models/reaction-by-topic';
import { IdeaService } from 'src/app/_services/idea.service';
import { ReactionService } from 'src/app/_services/reaction.service';
import { StorageService } from 'src/app/_services/storage.service';

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

  constructor(private ideaService: IdeaService,
    private reactionService: ReactionService,
    private route: ActivatedRoute,
    private storageService: StorageService,
    private router: Router) { }

    ngOnInit(): void {
      this.getIdeaByTopic(this.route.snapshot.params["topicId"]);
      
      
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

  reactionIdea(isLike:boolean, ideaId:number) {
    let userId = this.storageService.getUser().id;
    this.reactionService.saveReaction(isLike, ideaId, userId).subscribe({
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
  }
}
