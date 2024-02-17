import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListaComponent } from "./lista/lista.component";



@NgModule({
  declarations:[
    HeroeComponent,
    ListaComponent,
  ],
  exports:[
    HeroeComponent,
    ListaComponent,
  ]
})

export class HeroModule {}
