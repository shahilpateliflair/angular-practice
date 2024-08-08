import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentChildComponent } from './component/parent-child/parent-child.component';
import { ChildParentComponent } from './component/child-parent/child-parent.component';
import { FormControl,FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './Forms/form/form.component';
import { CustomPipe } from './custom.pipe';
import { DataTypesComponent } from './data-types/data-types.component';
import { ArrayToObjectComponent } from './array-to-object/array-to-object.component';
import { ParentComponent } from './partial/parent/parent.component';
import { ChildComponent } from './partial/child/child.component';
@NgModule({
  declarations: [
    AppComponent,
    ParentChildComponent,
    ChildParentComponent,
    FormComponent,
    CustomPipe,
    DataTypesComponent,
    ArrayToObjectComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
