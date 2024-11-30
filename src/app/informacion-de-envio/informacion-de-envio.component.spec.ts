import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionDeEnvioComponent } from './informacion-de-envio.component';

describe('InformacionDeEnvioComponent', () => {
  let component: InformacionDeEnvioComponent;
  let fixture: ComponentFixture<InformacionDeEnvioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformacionDeEnvioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionDeEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
