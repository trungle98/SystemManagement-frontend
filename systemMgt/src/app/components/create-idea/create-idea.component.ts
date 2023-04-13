import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IdeaService } from 'src/app/_services/idea.service';
import { StorageService } from 'src/app/_services/storage.service';
import { Idea } from 'src/app/models/idea';
import { Location } from '@angular/common'; 
import { CategoryService } from 'src/app/_services/category.service';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-create-idea',
  templateUrl: './create-idea.component.html',
  styleUrls: ['./create-idea.component.css']
})
export class CreateIdeaComponent {
  constructor(private ideaService: IdeaService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private storageService: StorageService,
    private location: Location,
    private router: Router) { }
  idea: Idea = new Idea('','','','','',0);
  file!:File;
  agree=false;
  cates?: Category[];
  selector = 0;
  isDone?:String;
  msg?:String;
  ngOnInit(): void {
    this.getAllCategory();
  }
  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    if (files.length > 0) {
      const file: File = files[0];
      this.idea.fileLocation = file.name;
      this.file = file;

    } else {
      this.idea.fileLocation='';
    }
  }
  getAllCategory() {
    this.categoryService.getAllCate().subscribe({
      next: data => {
        console.log(data);
        this.cates = data;
      },
      error: err => {console.log(err)
        if (err.error) {
        } else {
        }
      }
    });
  }

  onSubmit(form: NgForm) {
    // Submit the form data to the server\
    console.log(this.agree);
    
    if(!this.agree){
      
    }else{
      let topicId= +this.route.snapshot.queryParamMap.get("topicId")!
      let userId = this.storageService.getUser().id;
      this.idea.author = userId;
      this.idea.topicId = topicId!;
      this.idea.categoryId = this.selector;
      console.log(form);
      const formData = new FormData();
      formData.append('file', this.file)
      formData.append('content', this.idea.content!.toString())
      formData.append('author', userId)
      formData.append('categoryId', this.idea.categoryId.toString())
      formData.append('topicId', topicId.toString())
      formData.append('brief', this.idea.brief!.toString())
      this.ideaService.saveIdea(this.idea, formData).subscribe({
        next: data => {
          console.log("data",data);
          this.msg="true";
          console.log("msg:", this.msg);
          this.router.navigate(["/viewIdea/"+topicId], {queryParams: {"saveAlert":this.msg}});
        },
        error: err => {console.log("err", err)
          this.msg = "false";
          console.log("msg errr:", this.msg);
          if (err.error) {
          } else {
          }
          this.router.navigate(["/viewIdea/"+topicId], {queryParams: {"saveAlert":this.msg}});
        }
      });
      console.log("saveAlert", this.msg);
      
      
    }


  }
}
