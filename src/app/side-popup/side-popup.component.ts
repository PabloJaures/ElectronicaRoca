import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import productos from '../../assets/data/producto_dev.json'

@Component({
  selector: 'app-side-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-popup.component.html',
  styleUrls: ['./side-popup.component.scss'],
})
export class SidePopupComponent {
  items: Array<string>;

  constructor() {
    this.items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  }

  ngOnInit(): void {
    console.log('se cargo RowList Conponent');
  }

  popupPosition: string = '-600px';

  openPopup() {
    console.log('Opening popup');
    this.popupPosition = '0';
  }

  closePopup() {
    console.log('Closing popup');
    this.popupPosition = '-600px';
  }
  dataProductos = productos
}
