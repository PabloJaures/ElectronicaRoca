import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-administrador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './administrador.component.html',
  styleUrl: './administrador.component.scss'
})
export class AdministradorComponent {
  productos: any[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
      this.productoService.getProductos().subscribe(
          (data) => {
              this.productos = data;
          },
          (error) => {
              console.error('Error al obtener los productos:', error);
          }
      );
  }

}













let accionPendiente = null;
    
function editarProducto(id) {
    accionPendiente = { tipo: 'editar', id: id };
    document.getElementById('confirmacionTexto').innerText = "¿Estás seguro que deseas editar este producto?";
    mostrarModal();
}

function eliminarProducto(id) {
    accionPendiente = { tipo: 'eliminar', id: id };
    document.getElementById('confirmacionTexto').innerText = "¿Estás seguro que deseas eliminar este producto?";
    mostrarModal();
}

function mostrarModal() {
    document.getElementById('confirmacionModal').style.display = 'flex';
}

function confirmarAccion(confirmado) {
    document.getElementById('confirmacionModal').style.display = 'none';
    if (confirmado && accionPendiente) {
        if (accionPendiente.tipo === 'editar') {
            alert("Editar producto con ID " + accionPendiente.id);
        } else if (accionPendiente.tipo === 'eliminar') {
            alert("Producto con ID " + accionPendiente.id + " eliminado.");
        }
    }
    accionPendiente = null;
}