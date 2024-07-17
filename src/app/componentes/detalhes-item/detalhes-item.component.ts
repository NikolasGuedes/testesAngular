import { Component, OnInit } from '@angular/core';
import { ListService } from './../../services/list.service';
import { Animal_api } from 'src/app/Animal_api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-item',
  templateUrl: './detalhes-item.component.html',
  styleUrls: ['./detalhes-item.component.css'],
})
export class DetalhesItemComponent implements OnInit {
  constructor(private ListService: ListService, private route: ActivatedRoute) {
    this.getAnimal();
  }

  animal?: Animal_api

  ngOnInit(): void {}

  getAnimal() {
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.ListService.getItem(id).subscribe((animal) => this.animal = animal);
  }
}
