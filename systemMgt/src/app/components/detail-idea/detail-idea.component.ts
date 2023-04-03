import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Idea } from 'src/app/models/idea';
import { IdeaService } from 'src/app/_services/idea.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-detail-idea',
  templateUrl: './detail-idea.component.html',
  styleUrls: ['./detail-idea.component.css']
})
export class DetailIdeaComponent {

  idea?: Idea;
  msg?: String;
  path = "http://localhost:8081";
  constructor(private ideaService: IdeaService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      this.getIdeaById(this.route.snapshot.params["ideaId"]);
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
}
