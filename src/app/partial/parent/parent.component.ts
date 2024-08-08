import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { profile } from 'src/app/model/data';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit {
@ViewChild(ChildComponent) childComponent!: ChildComponent;
firstName = '';
  lastName = '';

array : profile[] =[]
ngAfterViewInit() {
  // Access the child component after view initialization
  this.childComponent.doSomething();
}
callChildMethod() {
  // Call a method on the child component
  this.childComponent.doSomething();
}



get fullName(): string {
  return `${this.firstName} ${this.lastName}`;
}
}
