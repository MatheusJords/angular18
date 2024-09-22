import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateImcButtonComponent } from './calculate-imc-button.component';

describe('CalculateImcButtonComponent', () => {
  let component: CalculateImcButtonComponent;
  let fixture: ComponentFixture<CalculateImcButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculateImcButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculateImcButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
