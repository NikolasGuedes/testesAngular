import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HomeComponent } from './componentes/home/home.component';
import { IfRenderComponent } from './componentes/if-render/if-render.component';
import { EventosComponent } from './componentes/eventos/eventos.component';
import { EmmiterComponent } from './componentes/emmiter/emmiter.component';
import { TrocaNumeroComponent } from './componentes/troca-numero/troca-numero.component';
import { ListRenderComponent } from './componentes/list-render/list-render.component';
import { InfoListaComponent } from './componentes/info-lista/info-lista.component';
import { AdicionarAnimalComponent } from './componentes/adicionar-animal/adicionar-animal.component';
import { PipesComponent } from './componentes/pipes/pipes.component';
import { TwoWayBindingComponent } from './componentes/two-way-binding/two-way-binding.component';
import { InfoListaAPIComponent } from './componentes/info-lista-api/info-lista-api.component';
import { DetalhesItemComponent } from './componentes/detalhes-item/detalhes-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    IfRenderComponent,
    EventosComponent,
    EmmiterComponent,
    TrocaNumeroComponent,
    ListRenderComponent,
    InfoListaComponent,
    AdicionarAnimalComponent,
    PipesComponent,
    TwoWayBindingComponent,
    InfoListaAPIComponent,
    DetalhesItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
