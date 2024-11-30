import { CommonModule, JsonPipe, UpperCasePipe } from '@angular/common';
import { identifierName } from '@angular/compiler';
import { Component, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import Regiones from '../../assets/data/comunas.json';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  public regionesData = Regiones;
  public selectedRegion: string = '';
  public comunas: string[] = [];

  ngOnInit(): void {
    //console.log("")
    if (this.regionesData.regiones.length > 0) {
      this.comunas = this.regionesData.regiones[0].comunas;
      this.selectedRegion = this.regionesData.regiones[0].region;
    }
  }

  onRegionChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const selectedRegion = target.value;

    const selected = this.regionesData.regiones.find(
      (r) => r.region === selectedRegion
    );
    if (selected) {
      this.comunas = selected.comunas;
      this.selectedRegion = selectedRegion;
    }
  }

  form_register = signal<FormGroup>(
    new FormGroup({
      Name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      LastName: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.email, Validators.required]),

      Number: new FormControl('', [
        Validators.required,
        Validators.maxLength(9),
        Validators.maxLength(9),
      ]),
      Street: new FormControl('', [Validators.required]),
      Direccion_adicional:new FormControl(''),
      Region: new FormControl([], [Validators.required]),
      Comuna: new FormControl([], [Validators.required]),

      Password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32),
      ]),
      ConfPassword: new FormControl('', [Validators.required]),
    })
  );
  Validator(): void {
    const Password_RG = this.form_register().value.password;
    const ConfPasword_RG = this.form_register().value.confirmpassword;

    if (Password_RG == ConfPasword_RG) {
      console.log('ambos campos coinciden');
    } else {
      alert('Las Contraseñas no coinciden');
      this.form_register().get('password')?.reset();
      this.form_register().get('confirmpassword')?.reset();
    }
  }
}
