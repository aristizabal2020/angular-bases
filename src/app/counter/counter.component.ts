import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template: `

  <h3>{{ contador}}</h3>

  <button (click)="increaseBy(1)">+1</button>
  <button (click)="resetCounter()">reset</button>
  <button (click)="increaseBy(-1)">-1</button>`
})

export class CounterComponent {

  public contador: number = 10;

  increaseBy( numero: number): void{
    this.contador += numero;
  }

  resetCounter(): void {

    this.contador = 10;

  }

  constructor() { }

}
