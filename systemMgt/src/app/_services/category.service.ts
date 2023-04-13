import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';

const API_URL = 'http://localhost:8081/api/';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getAllCate(): Observable<Category[]> {
    console.log("URL CATE"+ API_URL+'category/all');
    
    return this.http.get<Category[]> (API_URL + 'category/all');
  }

  getCateById(id:number): Observable<any> {
    return this.http.get(API_URL + 'category/get/?id='+id, { responseType: 'text' });
  }
  
  saveCate(cate: Category): Observable<any> {
    return this.http.post(API_URL + 'category/save',cate, { responseType: 'text' });
  }

  delCate(id: number): Observable<any> {
    return this.http.delete(API_URL + 'category/delete/?id='+id);
  }

}
