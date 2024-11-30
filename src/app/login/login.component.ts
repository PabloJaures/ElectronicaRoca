import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, RouterLink,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  FormLogin = signal<FormGroup>(
    new FormGroup({
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
    })
  );
  Validator(){
  const Correo = this.FormLogin().value.email;
  const Password = this.FormLogin().value.password
  

 }
}
