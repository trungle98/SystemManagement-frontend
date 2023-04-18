import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Analytics } from '../models/analytics';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8081/api/analytics/';
@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private http: HttpClient) {}

  getBarChart(): Observable<Analytics[]> {
    
    return this.http.get<Analytics[]> (API_URL + 'byDepartment');
  }

  getPieChartBullyingComment(): Observable<Analytics[]> {
    return this.http.get<Analytics[]> (API_URL + 'countCyberBullying');
  }

  getTopBullyingUser(): Observable<Analytics[]> {
    return this.http.get<Analytics[]> (API_URL + 'topBullyingUser');
  }
}
