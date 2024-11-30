import { Component } from '@angular/core';

@Component({
  selector: 'app-pantalla-usuario',
  standalone: true,
  imports: [],
  templateUrl: './pantalla-usuario.component.html',
  styleUrl: './pantalla-usuario.component.scss'
})
export class PantallaUsuarioComponent {

}











  // Tab Switching Logic
  const tabs = document.querySelectorAll('.tab-menu li a');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
          e.preventDefault();
          // Remove active classes
          tabs.forEach(item => item.classList.remove('active'));
          contents.forEach(content => content.classList.remove('active'));

          // Add active class to clicked tab and corresponding content
          tab.classList.add('active');
          const target = tab.getAttribute('href').substring(1);
          document.getElementById(target).classList.add('active');
      });
  });