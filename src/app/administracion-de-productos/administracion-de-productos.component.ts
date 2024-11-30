import { Component } from '@angular/core';

@Component({
  selector: 'app-administracion-de-productos',
  standalone: true,
  imports: [],
  templateUrl: './administracion-de-productos.component.html',
  styleUrl: './administracion-de-productos.component.scss'
})
export class AdministracionDeProductosComponent {

}


        // Función para filtrar la tabla
        function filtrarTabla() {
            const input = document.getElementById('buscar').value.toLowerCase();
            const filas = document.querySelectorAll('#tabla-productos tbody tr');
            filas.forEach(fila => {
                const textoFila = fila.textContent.toLowerCase();
                fila.style.display = textoFila.includes(input) ? '' : 'none';
            });
        }


        <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>




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
   

    