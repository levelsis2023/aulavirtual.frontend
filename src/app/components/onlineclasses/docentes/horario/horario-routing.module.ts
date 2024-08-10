import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HorarioComponent } from './horario.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: HorarioComponent }
    ])],
    exports: [RouterModule]
})
export class HorarioRoutingModule { }
