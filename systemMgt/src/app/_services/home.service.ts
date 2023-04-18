import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Idea } from '../models/idea';
import { Observable } from 'rxjs';


const API_URL = 'http://localhost:8081/api/home';
@Injectable({
  providedIn: 'root'
})

export class HomeService {

  constructor(private http: HttpClient) {}
  getTopViewsIdea(): Observable<Idea[]> {
    console.log("URL CATE"+ API_URL+'/getTopViewsIdea');
    
    return this.http.get<Idea[]> (API_URL + '/getTopViewsIdea');
  }

  getTopLikeIdea(): Observable<Idea[]> {
    console.log("URL CATE"+ API_URL+'/getTopLikeIdea');
    
    return this.http.get<Idea[]> (API_URL + '/getTopLikeIdea');
  }
}
