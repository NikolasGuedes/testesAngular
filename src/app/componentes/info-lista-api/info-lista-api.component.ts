import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { Animal_api } from 'src/app/Animal_api';

@Component({
  selector: 'app-info-lista-api',
  templateUrl: './info-lista-api.component.html',
  styleUrls: ['./info-lista-api.component.css']
})
export class InfoListaAPIComponent implements OnInit {

  animals: Animal_api[] = [];

  constructor(private listService: ListService) {
    this.getAnimals()
  }

  ngOnInit(): void {
  }
  textoDetalhes: string = '';

  MostrarIdadeAnimal(animal: Animal_api) {
    this.textoDetalhes = `O animal:${animal.name} tem a idade ${animal.age}`;
  }

  RemoveAnimalLista(animal : Animal_api) {
    console.log('Removendo Animal...');
    this.animals = this.animals.filter((a) => animal.name !== a.name)
    this.listService.delete(animal.id).subscribe()

  }

  getAnimals(){
    this.listService.getAll().subscribe((animais) => this.animals = animais)
  }

}
