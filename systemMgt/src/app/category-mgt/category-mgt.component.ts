import { Component } from '@angular/core';
import { Category } from '../models/category.model';
import { CategoryService } from '../_services/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-mgt',
  templateUrl: './category-mgt.component.html',
  styleUrls: ['./category-mgt.component.css']
})
export class CategoryMgtComponent {

  showAlert: any;

  content?:Category[];
  msg?:string;
  category?:Category;
  showDoneAlert= false;
  constructor(private cateService: CategoryService,
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      let isDone = params['saveAlert'];
      console.log("isDone", isDone);
      
      if (isDone==="true") {
        this.showTempAlert("done") // display the message as an alert
      }else if(isDone==="false"){
        this.showTempAlert("error")
      }
    });
    this.cateService.getAllCate().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {console.log(err)
        if (err.error) {
          this.content = JSON.parse(err.error).message;
        } else {
          this.content = [] ;
        }
      }
    });
  }

  // delete by Id
  deleteCate(id: number): void {
    this.cateService.delCate(id).subscribe({
      next: data => {
        this.msg = "Done";
        this.reloadPage();
      },
      error: err => {console.log(err)
        if (err.error) {
          this.msg = JSON.parse(err.error).message;
        } else {
          this.msg = "error" ;
        }
      }
    })
    
  }
  
// get cate by id
getCate(id: number): void {
    this.cateService.getCateById(id).subscribe({
      next: data => {
        this.msg = "Done";
        this.category = data;
        this.router.navigate(['category/create'], {queryParams: {"category": this.category}});
      },
      error: err => {console.log(err)
        this.reloadPage();
        if (err.error) {
          this.msg = JSON.parse(err.error).message;
        } else {
          this.msg = "error" ;
        }
      }
    })
    
  }


// get detailCate by id
detailCate(id: number): void {
  this.cateService.delCate(id).subscribe({
    next: data => {
      this.msg = "Done";
      this.reloadPage();
    },
    error: err => {console.log(err)
      if (err.error) {
        this.msg = JSON.parse(err.error).message;
      } else {
        this.msg = "error" ;
      }
    }
  })
  
}

// save cate by id
saveCateById(id: number): void {
  this.cateService.delCate(id).subscribe({
    next: data => {
      this.msg = "Done";
      this.reloadPage();
    },
    error: err => {console.log(err)
      if (err.error) {
        this.msg = JSON.parse(err.error).message;
      } else {
        this.msg = "error" ;
      }
    }
  })
  
}

// save new cate
saveNewCate(cate:Category): void {
  this.cateService.saveCate(cate).subscribe({
    next: data => {
      this.msg = "Done";
      this.reloadPage();
    },
    error: err => {console.log(err)
      if (err.error) {
        this.msg = JSON.parse(err.error).message;
      } else {
        this.msg = "error" ;
      }
    }
  })
  
}

  // reload page
  reloadPage(): void {
    window.location.href = '/category';
  }

  goToCreateCategory() {
    this.router.navigate(['category/create']);
    }
    backToList() {
    throw new Error('Method not implemented.');
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
