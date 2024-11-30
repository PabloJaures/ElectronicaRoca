import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-lomasvendido',
  standalone: true,
  imports: [],
  templateUrl: './lomasvendido.component.html',
  styleUrl: './lomasvendido.component.scss',
})
export class LomasvendidoComponent {
  @ViewChild('sliderMain') sliderMain!: ElementRef;
  Product: Array<string>;
  constructor() {
    this.Product = [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
      'Item 5',
      'Item 6',
      

    ];
  }

  ngOnInit(): void {
    console.log('Se inició Productos Recomendados');
  }
  nextSlide(): void {
    const sliderMain = this.sliderMain.nativeElement;
    const items = sliderMain.getElementsByClassName('item');
    if (items.length > 0) {
      sliderMain.append(items[0], items[1], items[2], items[3]);
    }
  }

  prevSlide(): void {
    const sliderMain = this.sliderMain.nativeElement;
    const items = sliderMain.getElementsByClassName('item');
    if (items.length > 0) {
      sliderMain.prepend(items[items.length - 1]);
    }
  }
}
