import { Component, OnInit } from '@angular/core';
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

}
