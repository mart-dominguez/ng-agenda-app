import { Component, OnInit,Input } from '@angular/core';
import { Tarea } from '../tarea.model';

@Component({
  selector: 'app-tarea-detalle',
  templateUrl: './tarea-detalle.component.html',
  styleUrls: ['./tarea-detalle.component.css']
})
export class TareaDetalleComponent implements OnInit {

  @Input() tarea:Tarea;
  constructor() { }

  ngOnInit() {
  }

}
