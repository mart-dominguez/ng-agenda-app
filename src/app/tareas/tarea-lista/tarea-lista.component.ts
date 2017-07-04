import { Component, OnInit } from '@angular/core';
import { Tarea } from '../tarea.model';

const TareasDB: Tarea[] = [
  new Tarea(11, 'Hacer algo'),
  new Tarea(12, 'otra cosa'),
  new Tarea(13, 'terminar x'),
  new Tarea(14, 'probar z'),
  new Tarea(15, 'tarea ww'),
  new Tarea(16, 'No olvidar j')
];

@Component({
  selector: 'app-tarea-lista',
  templateUrl: './tarea-lista.component.html',
  styleUrls: ['./tarea-lista.component.css']
})
export class TareaListaComponent implements OnInit {
  listaTarea:Tarea[];
  
  constructor() { 
    this.listaTarea = TareasDB;
  }

  ngOnInit() {
    
  }

}
