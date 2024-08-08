import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ParentChildService } from 'src/app/shared/parent-child.service';

@Component({
  selector: 'app-child-parent',
  templateUrl: './child-parent.component.html',
  styleUrls: ['./child-parent.component.css']
})
export class ChildParentComponent {
  // @Input() childData!: string;
  @Input() childsData: string | undefined;
  childData!: string;
  childDataWithService !:any;
  constructor(private router: Router ,private dataService:ParentChildService) {}

  ngOnInit() {
    this.childData = history.state.data;
  }

  // ngOnInit() {
  //   this.dataService.data.subscribe(data => {
  //     this.childData = data;
  //   });
  // }
}
