import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  values = { "fullName": "qwe", "email": "hello@gamil.com", "dateOfBirth": "2023-09-12T18:30:00.000Z", "termsAndConditions": "agree", "country": "us", "address": { "streetAddress": "qwer", "city": "asdf", "postalCode": "asdf" } }

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
