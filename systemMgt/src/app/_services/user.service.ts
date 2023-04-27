import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserDto } from '../models/user-dto';



@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8081/api/user';

  constructor(private http: HttpClient) {}

  deleteUser(userId: number): Observable<void> {
    const url = `${this.apiUrl}/delete/${userId}`;
    return this.http.get<void>(url);
  }

  updateUser(user: User): Observable<any> {
    const url = `${this.apiUrl}/${user.id}`;
    // return this.http.post(url, user);
    return this.http.post(url,user, { responseType: 'blob' });
  }

  getUserByID(userId: number): Observable<User> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get<User>(url);
  }

  createUser(user: User): Observable<any> {
    //return this.http.post<User>(this.apiUrl, user);
    return this.http.post(this.apiUrl + '/save',user, { responseType: 'blob' });
  }

  getUser(): Observable<UserDto[]> {
    const url = `${this.apiUrl}`+'/all';
    return this.http.get<UserDto[]>(url);
  }
}
