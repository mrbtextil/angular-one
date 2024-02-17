import { Component, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();
  public character: Character = {
    name: '',
    power: 0
  }
  emitCharacter():void{
    if(this.character.name.length === 0) return;
    this.onNewCharacter.emit({...this.character});

    this.character.name = '';
    this.character.power = 0;
  }
}
