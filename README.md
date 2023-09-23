# Rapid Rocket Form

## Description

**Rapid Rocket Form** is a versatile and user-friendly Angular-based form component that simplifies the process of creating dynamic and interactive forms. Whether you're building a registration form, a survey, or any other type of data input interface, this component streamlines the form creation process, making it easy to integrate complex forms into your Angular applications.

# Getting started

`RapidRocketForm` is an Angular component designed to create dynamic forms with ease.

 ### Installation  
 To use `RapidRocketForm` in your Angular project,
 you can install it via npm -> `npm i rapidrocketform`

### Usage

Import `RocketFormModule` in your Angular module and include it in your component's template. Here's a basic example of how to use it:

`In your module` :
```
import  {  RapidRocketFormModule  }  from  'rapidrocketform';
@NgModule({
	// ...
	imports: [
		RapidRocketFormModule
		],
	// ...
})
export  class  YourModule {  }
```
`In your component's template ` :
```<!-- In your component's template -->
<rapidrocketform
  [fields]="fieldsData"
  [debugMode]="false"
  [demoFields]="false"
  [setValues]="initialValues"
  [viewMode]="false"
  (submitForm)="onFormSubmit($event)"
></rapidrocketform>
```

### Inputs

-   `fields`: An array of `DataModel` objects representing form fields.
-   `debugMode` (optional, default: `false`): Set to `true` to enable debug mode.
-   `demoFields` (optional, default: `false`): Set to `true` to use demo fields.
-   `setValues` (optional): An object to set form values.
-   `viewMode` (optional, default: `false`): Set to `true` to enable view-only mode.

### Outputs
-   `submitForm`: An event emitter that emits the form data when the form is submitted.

## DataModel Interface

The `DataModel` interface defines the structure for form fields. It includes the following properties:

-   `type`: The type of the form field (e.g., "text", "email", "select").
-   `label`: The label to display for the field.
-   `name`: The unique name for the field.
-   `validator` (optional): An array of validation rules (e.g., "required", "email").
-   `options_r` (optional): An array of options for radio buttons.
-   `options_s` (optional): An array of options for select dropdowns.
-   `fields` (optional): An array of `DataModel` objects for grouped fields.

## Notes

-   You can customize the `fieldsData` array to define the structure of your form.
-   Use the `initialValues` object to pre-fill form fields.
-   Implement the `onFormSubmit` method to handle form submissions.

## Examples
```
# app.component.html 

<div  style="margin: 10px">
	<rapidrocketform 
		[debugMode]="false" 
		[demoFields]="false" 
		[fields]="fields" 
		[viewMode]="false"
		[setValues]="value"
		(submitForm)="submit($event)">
			<!-- content projection -->
			<h2  class="title">User Form</h2>
			<p  class="submitButton"> Save </p>
		</rapidrocketform>
</div>
```

```
# app.component.ts
import  {  Component  }  from  '@angular/core';
@Component({
	selector:  'app-root',
	templateUrl:  './app.component.html',
	styleUrls: ['./app.component.css']
})
export  class  AppComponent  {
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

// renders the fields based on this fields object
fields = [
{
	"type":  "text",
	"label":  "Full Name",
	"name":  "fullName",
	"validator": ["required"]
},
{
	"type":  "email",
	"label":  "Email Address",
	"name":  "email",
	"validator": ["required",  "email"]
},
{
	"type":  "date",
	"label":  "Date of Birth",
	"name":  "dateOfBirth",
	"validator": ["required"]
},
{
	"type":  "radio",
	"label":  "Terms & Conditions",
	"name":  "termsAndConditions",
	"validator": ["required"],
	"options_r": [
		{  "label":  "Agree",  "value":  "agree"  },
		{  "label":  "Disagree ",  "value":  "disagree "  }
	]
},
{
	"type":  "select",
	"label":  "Country",
	"name":  "country",
	"validator": ["required"],
	"options_s": [
		{  "label":  "United States",  "value":  "us"  },
		{  "label":  "Canada",  "value":  "ca"  },
		{  "label":  "United Kingdom",  "value":  "uk"  },
		{  "label":  "Other",  "value":  "other"  }
	]
},
{
	"type":  "group",
	"label":  "Address",
	"name":  "address",
	"fields": [
		{
			"type":  "text",
			"label":  "Street Address",
			"name":  "streetAddress",
			"validator": ["required"]
		},
		{
			"type":  "text",
			"label":  "City",
			"name":  "city",
			"validator": ["required"]
		},
		{
			"type":  "text",
			"label":  "Postal Code",
			"name":  "postalCode",
			"validator": ["required"]
		}
	]
}]

submit(data:  any)  {
	console.log(data);
	}
}

```

**License**

Rapid Rocket Form is distributed under the MIT License, allowing you the freedom to use, modify, and distribute it in accordance with the terms of the license.

----------

Feel free to adapt and expand upon this description to better suit your project's unique features and goals.