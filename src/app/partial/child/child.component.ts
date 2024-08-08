import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  message: string = 'Initial message';
  public doSomething() {
    console.log('Child component method called');
    this.message = 'Child component method called';

  }
}
