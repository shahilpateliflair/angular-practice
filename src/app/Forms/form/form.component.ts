import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { profile } from 'src/app/model/data';
import { FormService } from 'src/app/shared/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  contactForm!: FormGroup
  constructor(private fb:FormBuilder,private formService:FormService){}
ngOnInit(): void {
  this.contactForm = this.fb.group({
    name:['',Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  })
}
get fc() {
  return this.contactForm.controls;
}
onSubmit() {
  if (this.contactForm.valid) {
    this.formService.submitForm(this.contactForm.value).subscribe(
      (response: any) => {
        console.log('Form submitted successfully', response);
      },
      (error: any) => {
        console.error('Error submitting form', error);
        console.log('Submitted data:', this.contactForm.value);
      }
    );
  } else {
    if (this.fc['name'].errors?.['required']) {
      console.log('Error', 'Name is required.', 'error');
    }
  }
}
}
// onSubmit(){
//   if (this.contactForm.valid) {
//     this.formService.submitForm(this.contactForm.value).subscribe((response: any) => {
//       console.log('Form submitted successfully', response);
//     }, (error:any) => {
//       console.error('Error submitting form', error);

    
//     });
//   }
  
// }





