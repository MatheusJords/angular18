import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPatientButtonComponent } from './register-patient-button.component';

describe('RegisterPatientButtonComponent', () => {
  let component: RegisterPatientButtonComponent;
  let fixture: ComponentFixture<RegisterPatientButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterPatientButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPatientButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
