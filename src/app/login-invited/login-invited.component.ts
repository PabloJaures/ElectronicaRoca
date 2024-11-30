import { CommonModule, JsonPipe, UpperCasePipe } from '@angular/common';
import { identifierName } from '@angular/compiler';
import { Component, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import Regiones from '../../assets/data/comunas.json'

@Component({
  selector: 'app-login-invited',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './login-invited.component.html',
  styleUrl: './login-invited.component.scss'
})
export class LoginInvitedComponent {
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

    const selected = this.regionesData.regiones.find(r => r.region === selectedRegion);
    if (selected) {
      this.comunas = selected.comunas;
      this.selectedRegion = selectedRegion;
    }
  }
  

  form_invited = signal<FormGroup>(
    new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      apellido: new FormControl('',[Validators.required]),
      calle: new FormControl('',[Validators.required]),
      number: new FormControl('',[Validators.required, Validators.maxLength(9),Validators.maxLength(9)]),
      region: new FormControl([],[Validators.required]),
      comuna: new FormControl([],[Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
    })
  );
  Validator(): void {
    var pass = this.form_invited().value.password;
    var pass2 = this.form_invited().value.confirmpassword;
    var forms = document.querySelectorAll('.needs-validation')

    
    if (pass == pass2) {
      console.log('ambos campos coinciden');
    } else {
      alert('Las Contraseñas no coinciden');
      this.form_invited().get('password')?.reset();
      this.form_invited().get('confirmpassword')?.reset();
      
    }
  }
}
