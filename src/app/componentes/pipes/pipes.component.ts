import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  textoExemploPipe = "Texto uppercase em PipeOperator"

  constructor() { }

  ngOnInit(): void {
  }

}
