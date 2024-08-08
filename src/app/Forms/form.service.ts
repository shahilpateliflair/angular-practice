import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  // private apiUrl = 'https://example.com/api/contact';
  constructor(private http:HttpClient) { }

//   submitForm(data:any):Observable<any>{
// return this .http.post(this.apiUrl,data)
//   }
}
