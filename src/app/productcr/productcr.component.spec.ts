import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductcrComponent } from './productcr.component';

describe('ProductcrComponent', () => {
  let component: ProductcrComponent;
  let fixture: ComponentFixture<ProductcrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductcrComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductcrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
