import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

   name:string = ''
  textoGerado:string = ''

  constructor() { }

  ngOnInit(): void {
  }

  EnviaFormulario(){
    this.textoGerado = `O nome do usuario é ${this.name}`
   }

}
