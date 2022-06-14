import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {

  nombre: string = 'José Manuel';
  genero: string = 'masculino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  clientes: string[] = [
    'María', 'Pedro', 'Ricardo'
  ]

  clientesMapa = {
    '=0': 'no tenemos ni un cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando' ,
  }
  constructor() { }

  borrarPersona(){
    this.clientes.shift();
  }

  cambiarPersona(){
    this.nombre = 'María Ortiz';
    this.genero = 'femenino';
  }

  // key value pipe
  persona = {
    nombre: 'José Manuel',
    edad: 33,
    direccion: 'Chiguayante, Concepción'
  }

  // Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Batman',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }

  ]

// Async Pipe
miObs = interval(10000);

valorPromesa = new Promise((resolve, reject) =>{
  setTimeout(()=>{
    resolve('Todo a salido bien amigo mío (8)');
  }, 3500)
})
}

