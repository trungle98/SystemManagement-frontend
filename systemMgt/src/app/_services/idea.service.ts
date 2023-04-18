import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Idea } from '../models/idea';
import { Comment } from 'src/app/models/comment';
import { IdeaReaction } from '../models/idea-reaction';

const API_URL = 'http://localhost:8081/api/idea';
const url = API_URL+'/files/?filename=';

@Injectable({
  providedIn: 'root'
})
export class IdeaService {

  constructor(private http: HttpClient) {}
  getAllIdea(): Observable<Idea[]> {
    console.log("URL CATE"+ API_URL+'/all');
    
    return this.http.get<Idea[]> (API_URL + '/all');
  }

  getIdeaById(topicId: number): Observable<IdeaReaction[]> {
    return this.http.get<IdeaReaction[]>(API_URL + '/getByTopicId?topicId='+topicId);
  }
  
  getIdeaByIdeaId(ideaId: number): Observable<Idea> {
    return this.http.get<Idea>(API_URL + '/get/?id='+ideaId);
  }

  saveIdea(cate: Idea, formData: FormData): Observable<any> {
    console.log(cate);
    
    return this.http.post(API_URL + '/save?topicId='+cate.topicId,formData, { responseType: 'blob' });
  }

  delIdea(id: number): Observable<any> {
    return this.http.delete(API_URL + '/delete/?id='+id);
  }
  downloadFile(filename: String) {
    return this.http.get(API_URL+'/files/?filename='+filename, {responseType:'blob'})
  }
  getCommentByIdeaId(ideaId:number): Observable<Comment[]> {
    
    return this.http.get<Comment[]> (API_URL + '/getAllComment/?ideaId='+ideaId);
  }
  exportIdeaByTopicId(topicId: number) {
    return this.http.get(API_URL + '/exportExcel/?topicId='+topicId, {responseType:'blob'});
  }
}
