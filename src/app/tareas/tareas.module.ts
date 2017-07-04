import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareaComponent } from './tarea/tarea.component';
import { TareaListaComponent } from './tarea-lista/tarea-lista.component';
import { TareaDetalleComponent } from './tarea-detalle/tarea-detalle.component';
import { TareaEditableComponent } from './tarea-editable/tarea-editable.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TareaComponent, TareaListaComponent, TareaDetalleComponent, TareaEditableComponent],
  exports: [TareaComponent, TareaListaComponent, TareaDetalleComponent, TareaEditableComponent]
})
export class TareasModule { }
