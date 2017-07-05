import { Component, OnInit,Input ,SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';  

import { Tarea } from '../tarea.model';

@Component({
  selector: 'app-tarea-detalle',
  templateUrl: './tarea-detalle.component.html',
  styleUrls: ['./tarea-detalle.component.css']
})
export class TareaDetalleComponent implements OnInit {

  @Input() tarea:Tarea;
  editarTarea:boolean;
  constructor() { 
    this.editarTarea = false;
  }

  editar(){
    this.editarTarea=!this.editarTarea;
  }

  onTerminada(fin: boolean) {
    console.log("onTerminada : "+fin);
    this.editarTarea=!fin;
  }

  ngOnInit() {
    this.editarTarea = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("NG CHANGE TareaDetalleComponent");
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(propName+": currentValue = "+cur+", previousValue = "+prev);
    }
  }

}
