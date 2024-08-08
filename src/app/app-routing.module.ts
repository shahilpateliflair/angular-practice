import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentChildComponent } from './component/parent-child/parent-child.component';
import { ChildParentComponent } from './component/child-parent/child-parent.component';
import { FormComponent } from './Forms/form/form.component';
import { DataTypesComponent } from './data-types/data-types.component';
import { ArrayToObjectComponent } from './array-to-object/array-to-object.component';
import { ParentComponent } from './partial/parent/parent.component';
import { ChildComponent } from './partial/child/child.component';

const routes: Routes = [
  {
    path: 'parent',
    component: ParentChildComponent,
  },
  {
    path: 'child',
    component: ChildParentComponent,
  },
  {
    path: 'datatypes',
    component: DataTypesComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'partialParent',
    component: ParentComponent,
  },
  {
    path: 'partialChild',
    component: ChildComponent,
  },
  {
    path: 'arrayToObject',
    component: ArrayToObjectComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
