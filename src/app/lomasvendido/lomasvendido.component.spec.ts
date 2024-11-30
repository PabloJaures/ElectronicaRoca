import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LomasvendidoComponent } from './lomasvendido.component';

describe('LomasvendidoComponent', () => {
  let component: LomasvendidoComponent;
  let fixture: ComponentFixture<LomasvendidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LomasvendidoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LomasvendidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
