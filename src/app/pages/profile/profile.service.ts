import { Injectable } from '@angular/core';
import { URL } from '../../shared/routes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private url = URL;
  
  constructor(private http :HttpClient) { }

}
