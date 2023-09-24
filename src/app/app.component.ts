import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  values  =  {
    "fullName": "rapid rocket form",
    "email": "rapidrocketform@example.com",
    "dateOfBirth": "1990-05-15T12:00:00.000Z",
    "termsAndConditions": "agree",
    "country": "in",
    "notes": "This is a sample note.",
    "address": {
      "streetAddress": "123 Main Street",
      "city": "Banglore",
      "postalCode": "10001",
      "landmark": "Central Park"
    }
  }
  
  fields = [
    {
      "type": "text",
      "label": "Full Name",
      "name": "fullName",
      "validator": ["required"]
    },
    {
      "type": "email",
      "label": "Email Address",
      "name": "email",
      "validator": ["required", "email"]
    },
    {
      "type": "date",
      "label": "Date of Birth",
      "name": "dateOfBirth",
      "validator": ["required"]
    },
    {
      "type": "radio",
      "label": "Terms & Conditions",
      "name": "termsAndConditions",
      "validator": ["required"],
      "options_r": [
        { "label": "Agree", "value": "agree" },
        { "label": "Disagree ", "value": "disagree " }
      ]
    },
    {
      "type": "select",
      "label": "Country",
      "name": "country",
      "validator": ["required"],
      "options_s": [
        { "label": "India", "value": "in" },
        { "label": "United States", "value": "us" },
        { "label": "Other", "value": "other" }
      ]
    },
    {
      "type": "textarea",
      "label": "Notes",
      "name": "notes",
      "validator": ["required"]
    },
    {
      "type": "group",
      "label": "Address",
      "name": "address",
      "fields": [
        {
          "type": "text",
          "label": "Street Address",
          "name": "streetAddress",
          "validator": ["required"]
        },
        {
          "type": "text",
          "label": "City",
          "name": "city",
          "validator": ["required"]
        },
        {
          "type": "text",
          "label": "Postal Code",
          "name": "postalCode",
          "validator": ["required"]
        },
        {
          "type": "textarea",
          "label": "Landmark",
          "name": "landmark",
          "validator": ["required"]
        },
      ]
    }]

  submit(data: any) {
    console.log(data);
  }

}
