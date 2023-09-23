import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatronComponent } from './formatron.component';

describe('FormatronComponent', () => {
  let component: FormatronComponent;
  let fixture: ComponentFixture<FormatronComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormatronComponent]
    });
    fixture = TestBed.createComponent(FormatronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
