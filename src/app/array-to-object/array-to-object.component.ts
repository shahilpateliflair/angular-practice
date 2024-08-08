import { Component } from '@angular/core';

@Component({
  selector: 'app-array-to-object',
  templateUrl: './array-to-object.component.html',
  styleUrls: ['./array-to-object.component.css']
})
export class ArrayToObjectComponent {
  arrayInput: string = '';
  objectInput: string = '';
  
  // Conversion results
  convertedObject: any = {};
  convertedArray: any[] = [];

  // // Method to convert array to object
  // convertArrayToObject(): void {
  //   try {
  //     // Convert the input string to an array
  //     const array = JSON.parse(this.arrayInput);
  //     if (Array.isArray(array)) {
  //       // Convert array to object with indexed keys
  //       this.convertedObject = array.reduce((obj, item, index) => {
  //         obj[index] = item;
  //         return obj;
  //       }, {});
  //     } else {
  //       this.convertedObject = { error: 'Input is not a valid array' };
  //     }
  //   } catch (error) {
  //     this.convertedObject = { error: 'Invalid JSON format' };
  //   }
  // }

  // // Method to convert object to array
  // convertObjectToArray(): void {
  //   try {
  //     // Convert the input string to an object
  //     const obj = JSON.parse(this.objectInput);
  //     if (typeof obj === 'object' && !Array.isArray(obj)) {
  //       // Convert object to array
  //       this.convertedArray = Object.values(obj);
  //     } else {
  //       this.convertedArray = [];
  //       this.convertedArray.push({ error: 'Input is not a valid object' });
  //     }
  //   } catch (error) {
  //     this.convertedArray = [];
  //     this.convertedArray.push({ error: 'Invalid JSON format' });
  //   }
  // }

  convertArrayToObject(): void {
    this.convertedObject = JSON.parse(this.arrayInput).reduce((obj: any, item: any, index: any) => ({ ...obj, [index]: item }), {});
    // this.convertedObject = JSON.parse(this.arrayInput).reduce((obj, item, index) => ({ ...obj, [index]: item }), {});
  }
  
  convertObjectToArray(): void {
    this.convertedArray = Object.values(JSON.parse(this.objectInput));
  }
  
}
