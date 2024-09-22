import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateIMCComponent } from './calculate-imc.component';

describe('CalculateIMCComponent', () => {
  let component: CalculateIMCComponent;
  let fixture: ComponentFixture<CalculateIMCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculateIMCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculateIMCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
