import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { RouterLink } from '@angular/router';
import { SidePopupComponent } from './side-popup/side-popup.component';
import { RowListComponent } from './row-list/row-list.component';
import { ProductcrComponent } from './productcr/productcr.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import productos from '../assets/data/producto_dev.json'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RowListComponent,
    RouterOutlet,
    FooterComponent,
    NovedadesComponent,
    RouterLink,
    SidePopupComponent,
    ProductcrComponent,
    ReactiveFormsModule,
    CommonModule,
    
    

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-app'; 
  dataproductos = productos



  // Variable para controlar la visibilidad del popup
  isLoginPopupVisible = false;

  // Método para abrir el popup de inicio de sesión
  openLoginPopup() {
    this.isLoginPopupVisible = true;
  }

  // Método para cerrar el popup de inicio de sesión
  closeLoginPopup() {
    this.isLoginPopupVisible = false;
  }
}


