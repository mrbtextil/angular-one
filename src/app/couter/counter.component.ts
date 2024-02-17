import { Component } from '@angular/core';

@Component({
  selector:'app-counter' ,
  template:
   `
    <h4>{{ counter }}</h4>
    <button (click)="incrementBy(1)">mas 1</button>
    <button (click)="incrementBy(this.counter)">reset</button>
    <button (click)="incrementBy(-1)">menos 1</button>
  `,
})

export class CounterComponent {
  public counter: number = 10;
  constructor() { }
  incrementBy( num: number):void{
    this.counter += num;
  }
}
