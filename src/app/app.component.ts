import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Jose';
  valor: number = 1000;
  obj = {
    nombre: 'José Belmar'
  }

  mostrarNombre(){
    console.log(this.nombre);
    console.log(this.valor);
  }
}

