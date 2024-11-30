import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTrabajadoresComponent } from './agregar-trabajadores.component';

describe('AgregarTrabajadoresComponent', () => {
  let component: AgregarTrabajadoresComponent;
  let fixture: ComponentFixture<AgregarTrabajadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarTrabajadoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarTrabajadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
