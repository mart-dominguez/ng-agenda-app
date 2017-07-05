import { Injectable } from '@angular/core';
import { Tarea } from './tarea.model';

const TareasDB: Tarea[] = [
  new Tarea(11, 'Hacer algo'),
  new Tarea(12, 'otra cosa'),
  new Tarea(13, 'terminar x'),
  new Tarea(14, 'probar z'),
  new Tarea(15, 'tarea ww'),
  new Tarea(16, 'No olvidar j')
];

@Injectable()
export class TareaService {

  constructor() { }

  listarTareas():Tarea[]{
    return TareasDB;
  }

  buscarTarea(id:number):Tarea{
    return TareasDB.find(function(elemento){return elemento.id===id;});
  }

  agregarTarea(t:Tarea){
    TareasDB.push(t);
  }

}
