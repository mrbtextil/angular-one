import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'a number with  text nothing more';
  public counter: number = 10;
  incrementBy( num: number):void{
    this.counter += num;
  }
}
