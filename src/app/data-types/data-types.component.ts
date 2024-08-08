import { Component } from '@angular/core';

@Component({
  selector: 'app-data-types',
  templateUrl: './data-types.component.html',
  styleUrls: ['./data-types.component.css']
})
export class DataTypesComponent {
  // stringValue: string = '123';
  // numberValue: number = 456;

  // // Converted values
  // convertedToNumber: number;
  // convertedToString: string;

  // stringInput: string = '';
  // numberInput: number | null = null;

  // // Converted values
  // convertedToNumber: number | null = null;
  // convertedToString: string = '';

  stringInput: string = '';
  objectInput: any = {};
  convertedObject: any = {};
  convertedString: string = '';


// >>>>>>>>>>>>>>>>>>>>>>>>>>
// constructor(){
//   this.convertedToNumber = this.convertStringToNumber(this.stringValue);

//     // Convert number to string
//     this.convertedToString = this.convertNumberToString(this.numberValue);
// }

  // convertStringToNumber(value: string): number {
  //   const number = Number(value);
  //   return isNaN(number) ? 0 : number; // Return 0 if conversion fails
  // }

  // // Method to convert number to string
  // convertNumberToString(value: number): string {
  //   return value.toString();
  // }


// >>>>>>>>>>>>>>>>>>>>>>>.
  // convertStringToNumber(): void {
  //   this.convertedToNumber = Number(this.stringInput);
  //   if (isNaN(this.convertedToNumber)) {
  //     this.convertedToNumber = null; // Set to null if conversion fails
  //   }
  // }

  // // Method to handle number to string conversion
  // convertNumberToString(): void {
  //   this.convertedToString = this.numberInput?.toString() || '';
  // }



// >>>>>>>>>>>>>>>>>>>>>
 // // Method to convert  string to object
  convertStringToObject(): void {
    try {
      this.convertedObject = JSON.parse(this.stringInput);
    } catch (error) {
      this.convertedObject = { error: 'Invalid JSON format' };
    }
  }

  // Method to convert object to string
  convertObjectToString(): void {
    this.convertedString = JSON.stringify(this.objectInput, null, 2);
  }
}
