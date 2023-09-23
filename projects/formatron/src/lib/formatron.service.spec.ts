import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormatronComponent, DataModel } from './formatron.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

describe('FormatronComponent', () => {
  let component: FormatronComponent;
  let fixture: ComponentFixture<FormatronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormatronComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form', () => {
    expect(component.form).toBeDefined();
  });

  it('should build the form controls based on input fields', () => {
    const fields: DataModel[] = [
      { type: 'text', label: 'Name', name: 'name', validator: ['required'] },
      { type: 'email', label: 'Email', name: 'email', validator: ['email'] },
    ];

    component.fields = fields;
    component.buildForm();

    expect(component.form.get('name')).toBeDefined();
    expect(component.form.get('email')).toBeDefined();
  });

  it('should add validators to form controls', () => {
    const validators = component.addValidators(['required', 'email']);
    expect(validators).toContain(Validators.required);
    expect(validators).toContain(Validators.email);
  });

  it('should patch input values into the form', () => {
    const values = { name: 'John', email: 'john@example.com' };
    component.setInputValues(values);
    expect(component.form.value).toEqual(values);
  });

  it('should reset the form', () => {
    component.form.patchValue({ name: 'John', email: 'john@example.com' });
    component.reset();
    expect(component.form.value).toEqual({ name: '', email: '' });
  });

  it('should have a labels property', () => {
    expect(component.labels).toBeDefined();
  });

  it('should check for form control errors', () => {
    const nameControl = component.form.get('name');
    nameControl?.setValue('');
    expect(component.myError('name', 'required')).toBe(true);
  });

  it('should display validation error when a required field is empty', () => {
    const fields: DataModel[] = [
      { type: 'text', label: 'Name', name: 'name', validator: ['required'] },
    ];

    component.fields = fields;
    component.buildForm();

    const nameControl = component.form.get('name');
    nameControl?.setValue('');
    fixture.detectChanges();

    const nameInput = fixture.nativeElement.querySelector('input[name="name"]');
    const errorMessage = fixture.nativeElement.querySelector('.error-message');

    expect(nameInput).toBeTruthy();
    expect(errorMessage).toBeTruthy();
    expect(component.myError('name', 'required')).toBe(true);
  });

  it('should submit the form when all fields are valid', () => {
    const fields: DataModel[] = [
      { type: 'text', label: 'Name', name: 'name', validator: ['required'] },
      { type: 'email', label: 'Email', name: 'email', validator: ['email'] },
    ];

    component.fields = fields;
    component.buildForm();

    const nameControl = component.form.get('name');
    const emailControl = component.form.get('email');

    nameControl?.setValue('John');
    emailControl?.setValue('john@example.com');

    const onSubmitSpy = spyOn(component, 'onSubmit');
    const submitButton = fixture.nativeElement.querySelector('button[type="submit"]');

    submitButton.click();

    expect(onSubmitSpy).toHaveBeenCalled();
    expect(component.form.valid).toBe(true);
  });


});