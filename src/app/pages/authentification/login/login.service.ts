import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL } from '../../../shared/routes';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = URL;
  constructor(private http :HttpClient) 
  { }
  
  login(reg: User): Observable<any> {
    return this.http.post(this.url + 'login', reg, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
export interface User{
  email: string;
  password: string; 
}
