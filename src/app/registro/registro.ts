import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-registro',
  styleUrl: './registro.css',
  templateUrl: './registro.html',
})
export class Registro {

  nombreCompleto = '';
  correo = '';
  telefono = '';
  edad = '';
  contrasena = '';
  confirmarContrasena = '';

  registros: any[] = [];

  registrar() {

    if (this.contrasena === this.confirmarContrasena) {

      this.registros.push({
        nombreCompleto: this.nombreCompleto,
        correo: this.correo,
        telefono: this.telefono,
        edad: this.edad,
        contrasena: this.contrasena
      });

      this.nombreCompleto = '';
      this.correo = '';
      this.telefono = '';
      this.edad = '';
      this.contrasena = '';
      this.confirmarContrasena = '';

    } else {
      alert('Las contraseñas no coinciden');
    }

  }

}