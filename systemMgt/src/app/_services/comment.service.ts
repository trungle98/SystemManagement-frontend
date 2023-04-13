import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Comment} from '../models/comment'
const API_URL = 'http://localhost:8081/api/comment';
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {}

  saveComment(comment:Comment){
    
    return this.http.post(API_URL + '/save', comment, { responseType: 'text' });
  }
}
