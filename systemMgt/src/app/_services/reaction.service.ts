import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReactionByTopic } from '../models/reaction-by-topic';
import { Reaction } from '../models/reaction';

const API_URL = 'http://localhost:8081/api/reaction';
@Injectable({
  providedIn: 'root'
})
export class ReactionService {

  constructor(private http: HttpClient) {}

  getReactionByTopic(topicId:number): Observable<ReactionByTopic[]> {
    
    return this.http.get<ReactionByTopic[]> (API_URL + '/getByTopicId/?topicId='+topicId);
  }

  saveReaction(reaction:Reaction){
    
    return this.http.post(API_URL + '/save', reaction, { responseType: 'text' });
  }

  // getTopicById(): Observable<any> {
  //   return this.http.get(API_URL + '/get', { responseType: 'text' });
  // }
  
  // saveTopic(cate: Topic): Observable<any> {
  //   return this.http.post(API_URL + '/save', { responseType: 'blob' });
  // }

  // delTopic(id: number): Observable<any> {
  //   return this.http.delete(API_URL + '/delete/?id='+id);
  // }
}
