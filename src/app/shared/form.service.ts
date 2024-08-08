import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { profile } from '../model/data';
import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormService {
  private apiUrl = 'https://example.com/api/contact';
  users:profile[]=[]
  constructor(private http:HttpClient) { }

  getData(data:any):Observable<profile>{
return this.http.get(data);
  }
  
  submitForm(data:any):Observable<any>{
    return this .http.post(this.apiUrl,data)
      }
}
