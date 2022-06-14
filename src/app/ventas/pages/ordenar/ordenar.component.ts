import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html'
})
export class OrdenarComponent implements OnInit {


  enMayusculas: boolean = true;
  cars: Object[] = [
    {
      vin: 'Auto 1',
      year: 1998,
      brand: 'Kimono',
      color: 'black'

    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  cambiarMayusculas(){
    this.enMayusculas = !this.enMayusculas;
  }

}
