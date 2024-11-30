import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAdministradoresComponent } from './agregar-administradores.component';

describe('AgregarAdministradoresComponent', () => {
  let component: AgregarAdministradoresComponent;
  let fixture: ComponentFixture<AgregarAdministradoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarAdministradoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarAdministradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
