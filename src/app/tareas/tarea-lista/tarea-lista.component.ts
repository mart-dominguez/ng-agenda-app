import { Component, OnInit ,SimpleChanges} from '@angular/core';
import { Tarea } from '../tarea.model';
import { TareaService } from '../tarea.service';


@Component({
  selector: 'app-tarea-lista',
  templateUrl: './tarea-lista.component.html',
  styleUrls: ['./tarea-lista.component.css'],
  providers:[TareaService]
})
export class TareaListaComponent implements OnInit {
  listaTarea:Tarea[];
  
  constructor(tareaService:TareaService) { 
    this.listaTarea = tareaService.listarTareas();
  }

  ngOnInit() {
    
  }
  ngOnChanges(changes: SimpleChanges) {
        console.log("NG CHANGE TareaListaComponent");
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(propName+": currentValue = "+cur+", previousValue = "+prev);
    }
  }

}
