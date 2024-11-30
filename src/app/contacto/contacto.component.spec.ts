import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoComponent } from './contacto.component';

describe('ContactoComponent', () => {
  let component: ContactoComponent;
  let fixture: ComponentFixture<ContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});







const carousel = document.getElementById('carousel') as HTMLElement;
const nextBtn = document.getElementById('nextBtn') as HTMLButtonElement;
const prevBtn = document.getElementById('prevBtn') as HTMLButtonElement;

let currentPosition: number = 0; // Posición inicial
const cardWidth: number = 240; // Ancho de cada tarjeta (incluyendo márgenes)
const totalCards: number = 10; // Total de tarjetas
const cardsPerSlide: number = 4; // Tarjetas por slide
const totalSlides: number = totalCards / cardsPerSlide; // Total de slides

// Botón para avanzar
nextBtn.addEventListener('click', () => {
    if (currentPosition > -(totalSlides - 1) * cardWidth) {
        currentPosition -= cardWidth;
    }
    carousel.style.transform = `translateX(${currentPosition}px)`;
});

// Botón para retroceder
prevBtn.addEventListener('click', () => {
    if (currentPosition < 0) {
        currentPosition += cardWidth;
    }
    carousel.style.transform = `translateX(${currentPosition}px)`;
});
