import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Topic } from '../models/topic';

const API_URL = 'http://localhost:8081/api/topic';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: HttpClient) {}

  getAllTopic(pageNo:number): Observable<any> {
    console.log("URL CATE"+ API_URL+'/all?');
    
    return this.http.get<Topic[]> (API_URL + '/all?pageNo='+pageNo);
  }

  getTopicById(topicId:number): Observable<any> {
    return this.http.get(API_URL + '/get/?id='+topicId, { responseType: 'text' });
  }
  
  saveTopic(topic: Topic): Observable<any> {
    return this.http.post(API_URL + '/save',topic, { responseType: 'blob' });
  }

  delTopic(id: number): Observable<any> {
    return this.http.delete(API_URL + '/delete/?id='+id);
  }
}
