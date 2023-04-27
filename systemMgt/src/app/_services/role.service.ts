import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from '../models/role';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RoleService {
  API_URL = 'http://localhost:8081/api/role';
  
  constructor(private http: HttpClient) { }

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.API_URL+"/all");
  }

  getRole(id: number): Observable<Role> {
    return this.http.get<Role>(`${this.API_URL}/${id}`);
  }

  createRole(role: Role): Observable<Role> {
    return this.http.post<Role>(`${this.API_URL}/save`, role);
  }

  updateRole(role: Role): Observable<Role> {
    return this.http.post<Role>(`${this.API_URL}/${role.id}`, role);
  }

  deleteRole(id: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/delete/${id}`);
  }
}
