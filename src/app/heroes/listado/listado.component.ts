import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman', 'Batman', 'IronMan'];

  heroeBorrado: string = '';

  popFromHeroes(): void {
    if(this.heroes.length == 0)
    {
      return;
    }

    this.heroeBorrado = this.heroes[this.heroes.length-1];
    this.heroes.pop();
  }
}
