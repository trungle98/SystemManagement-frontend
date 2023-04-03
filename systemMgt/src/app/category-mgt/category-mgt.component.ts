import { Component } from '@angular/core';
import { Category } from '../models/category.model';
import { CategoryService } from '../_services/category.service';

@Component({
  selector: 'app-category-mgt',
  templateUrl: './category-mgt.component.html',
  styleUrls: ['./category-mgt.component.css']
})
export class CategoryMgtComponent {
  content?:Category[];
  msg?:string;

  constructor(private cateService: CategoryService) { }

  ngOnInit(): void {
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
}
