import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-adicionar-animal',
  templateUrl: './adicionar-animal.component.html',
  styleUrls: ['./adicionar-animal.component.css']
})
export class AdicionarAnimalComponent implements OnInit {

  @Output() ColocaNovoAnimalLista: EventEmitter<Animal> = new EventEmitter();

  nome: string = '';
  especie: string = '';
  idade!: number;

  novoAnimal: Animal = {
    nome: "",
    especie: "",
    idade: 0,
  };

  constructor() {}

  ngOnInit(): void {}

  criaNovoAnimal() {
    this.novoAnimal = {
      nome: this.nome,
      especie: this.especie,
      idade: this.idade,
    };

    this.chamaFuncaoNovoAnimal(this.novoAnimal)

  }
  chamaFuncaoNovoAnimal(animal: Animal) {

    this.ColocaNovoAnimalLista.emit(animal);

  }

}
