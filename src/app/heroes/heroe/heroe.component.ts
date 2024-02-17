import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
  public name: string = 'papsps';
  public edad: number = 333;
  changeName():void {
    this.name = 'otroooo';
  }
  changeAge():void {
    this.edad =24;
  }
  public her: string[] = ['ads','bbbb','cccc','ddddd','wwww','pppp'];

}
