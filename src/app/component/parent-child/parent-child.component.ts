import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ParentChildService } from 'src/app/shared/parent-child.service';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent {
 parentData:string = 'hii shahil msg from parent'
 parentToChildData:any = 'shail your number is 12345'
constructor(private router:Router ,private parentService:ParentChildService){}

 navigateToChild() {
  this.router.navigate(['/child'], { state: { data: this.parentData } });
}

navigateToChildWithService() {
  this.parentService.setData(this.parentToChildData);
  this.router.navigate(['/child']);
}

}
