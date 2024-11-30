import { Component } from '@angular/core';
import { ProductcrComponent } from '../productcr/productcr.component';
import { LomasvendidoComponent } from '../lomasvendido/lomasvendido.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductcrComponent,LomasvendidoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
