import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-troca-numero',
  templateUrl: './troca-numero.component.html',
  styleUrls: ['./troca-numero.component.css']
})
export class TrocaNumeroComponent implements OnInit {

  @Output() trocaNumero: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  enviarFuncao(){
    console.log("Funcao emitida")
    this.trocaNumero.emit() // envia função para outro componente
  }

}
