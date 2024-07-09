import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-info-lista',
  templateUrl: './info-lista.component.html',
  styleUrls: ['./info-lista.component.css']
})
export class InfoListaComponent implements OnInit {

  listaAnimais: Animal[] = [
    { nome: 'Toby', especie: 'Cachorro', idade: 2 },
    { nome: 'Chica', especie: 'Gato', idade: 3 },
    { nome: 'Pablo', especie: 'Piriquito', idade: 4 },
  ];

  animalteste: Animal = {
    nome: 'teste',
    especie: 'teste',
    idade: 0,
  }

  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }

  textoDetalhes: string = '';

  MostrarIdadeAnimal(animal: Animal) {
    this.textoDetalhes = `O animal:${animal.nome} tem a idade ${animal.idade}`;
  }

  RemoveAnimalLista(animal: Animal) {
    console.log('Removendo Animal...');
    this.listaAnimais = this.listService.remove(this.listaAnimais, animal);
  }

  onColocaNovoAnimalLista(animal: Animal) {
    this.listService.add(this.listaAnimais, animal)
    console.log(this.listaAnimais)
  }

}
