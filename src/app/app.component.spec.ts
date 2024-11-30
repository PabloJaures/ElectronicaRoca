import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  // Propiedad para controlar la visibilidad del formulario de inicio de sesión
  isLoginVisible = false;
  username = '';
  password = '';

  // Función para abrir el primer popup (carrito)
  openPopup1() {
    const popup = document.getElementById('popup1');
    if (popup) {
      popup.style.right = '0'; // Despliega el popup desde la derecha
    }
  }

  // Función para cerrar el primer popup
  closePopup1() {
    const popup = document.getElementById('popup1');
    if (popup) {
      popup.style.right = '-600px'; // Oculta el popup
    }
  }

  // Función para redirigir desde el segundo popup
  openPopup2() {
    window.location.href = '/login'; // Redirige a login.component.html
  }

  // Función para mostrar el formulario de inicio de sesión
  showLogin() {
    this.isLoginVisible = true; // Cambia el estado a visible
  }

  // Función para ocultar el formulario de inicio de sesión
  hideLogin() {
    this.isLoginVisible = false; // Cambia el estado a oculto
  }

  // Función para manejar el envío del formulario
  onSubmit() {
    console.log('Nombre de usuario:', this.username);
    console.log('Contraseña:', this.password);
    // Aquí puedes agregar la lógica de autenticación
  }
}
