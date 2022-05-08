import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzSerivce } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  /**
   *
   */
  constructor(private dbzService: DbzSerivce) {
    
  }

  personajes: Personaje[] = [
    {
      nombre: 'Krillin',
      poder: 5000
    },
    {
      nombre: 'Trunks',
      poder: 10000
    },
    {
      nombre: 'Vegeta',
      poder: 13000
    },
    {
      nombre: 'Goku',
      poder: 15000
    }
  ];
 
  nuevo: Personaje = {
    nombre: 'Uranai Baba',
    poder: 1200000
  }

  agregarNuevoPersonaje(arg: Personaje): void {

    this.personajes.push(arg);
    
  }
}
