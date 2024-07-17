import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { IfRenderComponent } from './componentes/if-render/if-render.component';
import { EventosComponent } from './componentes/eventos/eventos.component';
import { EmmiterComponent } from './componentes/emmiter/emmiter.component';
import { ListRenderComponent } from './componentes/list-render/list-render.component';
import { PipesComponent } from './componentes/pipes/pipes.component';
import { TwoWayBindingComponent } from './componentes/two-way-binding/two-way-binding.component';
import { DetalhesItemComponent } from './componentes/detalhes-item/detalhes-item.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "if-render", component: IfRenderComponent},
  {path: "eventos", component: EventosComponent},
  {path: "emmiter", component: EmmiterComponent},
  {path: "list-render", component: ListRenderComponent},
  {path: "pipe", component: PipesComponent},
  {path: "binding", component: TwoWayBindingComponent},
  {path: "list-render/:id", component: DetalhesItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
