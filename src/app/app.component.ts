import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  values  =  {
    "fullName":  "John Doe",
    "email":  "johndoe@example.com",
    "dateOfBirth":  "1990-05-15T12:00:00.000Z",
    "termsAndConditions":  "accept",
    "country":  "USA",
    "address":  {
    "streetAddress":  "123 Main Street",
    "city":  "New York",
    "postalCode":  "10001"
    }
  }
  
  fields = [
    {
      "type": "email",
      "label": "Full Name",
      "name": "fullName",
      "validator": ["required",'email']
    }]

  submit(data: any) {
    console.log(data);
  }

}
