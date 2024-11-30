import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-row-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './row-list.component.html',
  styleUrl: './row-list.component.scss',
})
export class RowListComponent implements OnInit {
  items: Array<string>;

  constructor() {
    this.items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  }

  ngOnInit(): void {
    console.log('se cargo RowList Conponent');
  }
}
