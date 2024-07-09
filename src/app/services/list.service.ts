import { Injectable } from '@angular/core';
import { Animal } from '../Animal';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor() {}

  remove(animais: Animal[], animal: Animal) {
    return animais.filter((a) => animal.nome !== a.nome);
  }

  add(animais: Animal[], animal: Animal){
    return animais.push(animal)
  }
}
