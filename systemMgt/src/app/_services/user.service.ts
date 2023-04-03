import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8081/api/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'test/all', { responseType: 'text' });
  }

  getStaffBoard(): Observable<any> {
    return this.http.get(API_URL + 'staff/all', { responseType: 'text' });
  }
  
  getManagerBoard(): Observable<any> {
    return this.http.get(API_URL + 'manager', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'test/admin', { responseType: 'text' });
  }

  getDeptBoard(): Observable<any> {
    return this.http.get(API_URL + 'dept', { responseType: 'text' });
  }
}
