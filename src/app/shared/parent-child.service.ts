import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParentChildService {
  private dataSubject = new BehaviorSubject<string>('default data');
  data = this.dataSubject.asObservable();

  setData(data: string) {
    this.dataSubject.next(data);
  }
}
