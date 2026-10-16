import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {
  usuario = {
    nombre: '',
    correo: '',
    telefono: '',
    edad: null as number | null,
    contrasena: '',
    confirmacion: ''
  };

  registros: {
    nombre: string;
    correo: string;
    telefono: string;
    edad: number | null;
  }[] = [];

  registroExitoso = false;

  registrar() {
    if (
      !this.usuario.nombre.trim() ||
      this.usuario.nombre.trim().length < 3 ||
      !this.usuario.correo ||
      !this.usuario.telefono.trim() ||
      this.usuario.edad === null ||
      this.usuario.edad < 18 ||
      !this.usuario.contrasena ||
      this.usuario.contrasena.length < 6 ||
      this.usuario.contrasena !== this.usuario.confirmacion
    ) {
      return;
    }

    this.registros.push({
      nombre: this.usuario.nombre,
      correo: this.usuario.correo,
      telefono: this.usuario.telefono,
      edad: this.usuario.edad
    });

    this.registroExitoso = true;

    this.usuario = {
      nombre: '',
      correo: '',
      telefono: '',
      edad: null,
      contrasena: '',
      confirmacion: ''
    };
  }
}
