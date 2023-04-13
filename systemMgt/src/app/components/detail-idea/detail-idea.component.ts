import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Idea } from 'src/app/models/idea';
import { IdeaService } from 'src/app/_services/idea.service';
import { saveAs } from 'file-saver';
import { CommentService } from 'src/app/_services/comment.service';
import { Comment } from 'src/app/models/comment';
import { StorageService } from 'src/app/_services/storage.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-detail-idea',
  templateUrl: './detail-idea.component.html',
  styleUrls: ['./detail-idea.component.css']
})
export class DetailIdeaComponent {

  idea?: Idea;
  comments?: Comment[];
  msg?: String;
  path = "http://localhost:8081";
  commentInput?: String;
  constructor(private ideaService: IdeaService,
    private commentService: CommentService,
    private storageService: StorageService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router) { }

    ngOnInit(): void {
      this.getIdeaById(this.route.snapshot.params["ideaId"]);
      this.loadCommentByIdeaId(this.route.snapshot.params["ideaId"]);
    }

  getIdeaById(ideaId: number): void {
    this.ideaService.getIdeaByIdeaId(ideaId).subscribe({
      next: data => {
        this.idea = data;
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
  download(filename: String | undefined) {
    // this.ideaService.downloadFile("uploads/asd.txt").subscribe((data: Blob | MediaSource) => {
    //   let downloadURL = window.URL.createObjectURL(data);
    //   console.log(data);
      
    //   saveAs(downloadURL);
    // })
    let name =''
    let file = ''
    if ( filename != undefined){
      file = filename.replace('', '')
      name = filename.replace('uploads/', '')
    }
    this.ideaService.downloadFile(file).subscribe(blob => {
      const a = document.createElement('a');
      const objectURL = URL.createObjectURL(blob)
      a.href = objectURL
      a.download = name
      a.click()
      URL.revokeObjectURL(objectURL)
    })
    }

    loadCommentByIdeaId(ideaId: number) {
      this.ideaService.getCommentByIdeaId(ideaId).subscribe({
        next: data => {
          this.comments = data;
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

    SendComment() {
      let ideaId = this.route.snapshot.params["ideaId"];
      let userId = this.storageService.getUser().id;
      let commentPayload = new Comment(ideaId, userId,this.commentInput, '')
      
      this.commentService.saveComment(commentPayload).subscribe({
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
      window.location.reload()
    }

    backToPreviousPage() {
      this.location.back();

      }
      
}
