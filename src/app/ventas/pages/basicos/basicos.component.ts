import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent implements OnInit {

  nombreLower: string = 'José'
  nombreUpper: string = 'JOSÉ'
  nombreCompleto: string = 'JoSé'
  fecha: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
