import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeButtonComponent } from './welcome-button.component';

describe('WelcomeButtonComponent', () => {
  let component: WelcomeButtonComponent;
  let fixture: ComponentFixture<WelcomeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
