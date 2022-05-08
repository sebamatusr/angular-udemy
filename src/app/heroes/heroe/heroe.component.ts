import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
  nombre: string = 'Iron Man';
  edad: number = 45;

  obtenerNombreYEdad(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarHeroe(nombre: string): void {
    this.nombre = nombre;
  }

  cambiarEdad(edad: number): void {
    this.edad = edad;
  }
}