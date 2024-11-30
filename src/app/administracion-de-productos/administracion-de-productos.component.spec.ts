import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionDeProductosComponent } from './administracion-de-productos.component';

describe('AdministracionDeProductosComponent', () => {
  let component: AdministracionDeProductosComponent;
  let fixture: ComponentFixture<AdministracionDeProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministracionDeProductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministracionDeProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
