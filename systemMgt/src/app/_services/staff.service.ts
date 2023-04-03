import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Topic } from '../models/topic';

const API_URL = 'http://localhost:8081/api/topic';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private http: HttpClient) {}

  getAllTopic(): Observable<Topic[]> {
    console.log("URL CATE"+ API_URL+'/all');
    
    return this.http.get<Topic[]> (API_URL + '/all');
  }

  getTopicById(): Observable<any> {
    return this.http.get(API_URL + '/get', { responseType: 'text' });
  }
  
  saveTopic(cate: Topic): Observable<any> {
    return this.http.post(API_URL + '/save', { responseType: 'blob' });
  }

  delTopic(id: number): Observable<any> {
    return this.http.delete(API_URL + '/delete/?id='+id);
  }
}
