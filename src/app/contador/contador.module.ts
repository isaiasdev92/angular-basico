import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations: [
        ContadorComponent
    ],
    //Los modulos que se podra exportar con el componente
    exports: [
        ContadorComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ContadorModule {}