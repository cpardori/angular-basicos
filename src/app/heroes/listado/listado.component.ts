import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spider man', 'Iron man', 'Hulk', 'Thor', 'Capitan América'];
  heroeBorrado: string = '';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
