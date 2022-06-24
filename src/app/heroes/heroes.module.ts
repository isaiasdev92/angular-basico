import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    //Los modulos que se podra exportar con el componente
    exports: [
        ListadoComponent,
    ],
    imports:  [
        CommonModule
    ]
})
export class HeroesModule {}