import { Component } from "@angular/core";

@Component({
  selector: 'app-contador',
  template: `
  <h1>{{ title }}</h1>  
  <h3>La base es: <strong> {{ base }} </strong></h3>

  <button (click)="aggregate(base)">+{{base}}</button>

  <span>{{ numero }}</span>

  <button (click)="aggregate(-base)">-{{base}}</button>
  `
})
export class ContadorComponent {
  title: string = 'Contador App';
  numero: number = 10;
  base: number = 5;

  aggregate(valor: number): void {
    this.numero += valor;
  }
}