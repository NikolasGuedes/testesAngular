import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  mensagem: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  RevelarMensagem(): void {
    this.mensagem = !this.mensagem
  }

}
