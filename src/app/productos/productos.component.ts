import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})
export class ProductosComponent {

}






    // JavaScript para manejar el carrusel
    const images = document.querySelectorAll('.product-image');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    let currentImageIndex = 0;
  
    function showImage(index) {
      images.forEach((image, i) => {
        image.classList.toggle('active', i === index);
      });
    }
  
    prevButton.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      showImage(currentImageIndex);
    });
  
    nextButton.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      showImage(currentImageIndex);
    });
  
    // Mostrar la primera imagen por defecto
    showImage(currentImageIndex);








    
    function toggleFavorite(button) {
      button.classList.toggle('active'); // Cambia el estado activo de favoritos
  }






    src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"