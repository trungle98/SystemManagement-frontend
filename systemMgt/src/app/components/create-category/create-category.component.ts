import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/_services/category.service';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent {
  cate = new Category('','')
  constructor(private cateService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }
    ngOnInit(): void {
      console.log("init create page");
      
      this.activatedRoute.queryParams.subscribe(params => {
        let isDone = params['category'];
        console.log("default: ",this.cate, "update: ", params['category']);
        
        this.cate = Object.assign(new Category(), JSON.parse(isDone));
        console.log("assign: ", this.cate);
        
      });
    }


msg?:String;
onSubmit(form: NgForm) {
  console.log(this.cate);
  
  this.cateService.saveCate(this.cate).subscribe({
    next: data => {
      console.log("data",data);
      this.msg="true";
      console.log("msg:", this.msg);
      this.router.navigate(["/category/"], {queryParams: {"saveAlert":this.msg}});
    },
    error: err => {console.log("err", err)
      this.msg = "false";
      console.log("msg errr:", this.msg);
      if (err.error) {
      } else {
      }
      this.router.navigate(["/category/"], {queryParams: {"saveAlert":this.msg}});
    }
  });
}

}
