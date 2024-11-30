import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-productcr',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './productcr.component.html',
  styleUrls: ['./productcr.component.scss'],
})
export class ProductcrComponent implements OnInit {
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
      'Item 7',
      'Item 8',
      'Item 9',
      'Item 10',
      'Item 12',
      'Item 13',
      'Item 14'
    ];
  }

  getGroupedItems(items: string[], groupSize: number): string[][] {
    let groups = [];
    for (let i = 0; i < items.length; i += groupSize) {
      groups.push(items.slice(i, i + groupSize));
    }
    return groups;
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
