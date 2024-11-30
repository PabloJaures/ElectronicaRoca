import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElegirDomicilioComponent } from './elegir-domicilio.component';

describe('ElegirDomicilioComponent', () => {
  let component: ElegirDomicilioComponent;
  let fixture: ComponentFixture<ElegirDomicilioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElegirDomicilioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElegirDomicilioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
