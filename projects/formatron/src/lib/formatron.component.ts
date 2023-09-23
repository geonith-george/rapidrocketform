import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LabelConstants } from './constants/label.constants';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'formatron',
  templateUrl: './formatron.component.html',
  styles: [
  ]
})
export class FormatronComponent {

  @Input() fields!: DataModel[];
  @Input() debugMode: boolean = false;
  form!: FormGroup;
  @Input() demoFields: boolean = false;
  @Input() setValues: any;
  @Output() submitForm: EventEmitter<any> = new EventEmitter<any>();
  @Input() viewMode: boolean = false;

  demoFieldsJson = [
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
        { "label": "United States", "value": "us" },
        { "label": "Canada", "value": "ca" },
        { "label": "United Kingdom", "value": "uk" },
        { "label": "Other", "value": "other" }
      ]
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
        }
      ]
    }]

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({});
    if (this.demoFields === true) {
      this.fields = this.demoFieldsJson;
    }

    this.buildForm(this.fields);
    if (this.setValues) {
      this.setInputValues(this.setValues);
    }

  }

  buildForm(fields: DataModel[]) {
    const formCtrl: { [key: string]: [{ value: string, disabled: boolean }, Validators | null] | FormGroup<{}> } = {};

    fields.forEach((field) => {
      if (field.type === 'group' && field.fields) {
        // Recursively build the subfields
        formCtrl[field.name] = this.buildFormGroup(field.fields);
      } else {
        formCtrl[field.name] = [
          { value: '', disabled: this.viewMode },
          field.validator ? this.addValidators(field.validator) : null,
        ];
      }
    });

    this.form = this.fb.group(formCtrl);
  }

  buildFormGroup(subfields: DataModel[]): FormGroup {
    const formCtrl: { [key: string]: [{ value: string, disabled: boolean }, Validators | null] | FormGroup<{}> } = {};

    subfields.forEach((field) => {
      formCtrl[field.name] = [
        { value: '', disabled: this.viewMode },
        field.validator ? this.addValidators(field.validator) : null,
      ];
    });

    return this.fb.group(formCtrl);
  }

  addValidators(validator: string[]) {
    // this.addValidators(field.validator)
    let valArr: any[] = [];

    validator.forEach(element => {
      if (element === "required") {
        valArr.push(Validators.required);
      }
      else if (element === "email") {
        valArr.push(Validators.email);
      }
    });
    return valArr;
  }

  setInputValues(values: { [key: string]: any }) {
    // parse the input value
    this.form.patchValue(values);
  }

  reset() {
    this.form.reset();
  }

  onSubmit() {
    this.submitForm.emit(this.form.value);
  }

  get labels() { return LabelConstants }

  public myError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

}

export interface DataModel {
  type: string,
  label: string;
  name: string;
  validator?: string[];
  options_r?: { label: string, value: string }[];
  options_s?: { label: string, value: string }[];
  fields?: DataModel[];
}
