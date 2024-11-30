import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarADomicilioComponent } from './enviar-a-domicilio.component';

describe('EnviarADomicilioComponent', () => {
  let component: EnviarADomicilioComponent;
  let fixture: ComponentFixture<EnviarADomicilioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnviarADomicilioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnviarADomicilioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
