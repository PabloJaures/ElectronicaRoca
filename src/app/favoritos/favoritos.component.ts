import { Component } from '@angular/core';
import { RowListComponent } from '../row-list/row-list.component';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [RowListComponent],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.scss'
})
export class FavoritosComponent {

}


