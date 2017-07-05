import { Component, OnInit,EventEmitter, Input, Output  ,SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';  

import {Tarea} from '../tarea.model';
@Component({
  selector: 'app-tarea-editable',
  templateUrl: './tarea-editable.component.html',
  styleUrls: ['./tarea-editable.component.css']
})
export class TareaEditableComponent implements OnInit {
  @Input("tarea") private _tarea:Tarea;
  private titulo:string;
  @Output() onTerminada = new EventEmitter<boolean>();
  public pi1: number;
  public e1: number;
  public a: number;
  public b: number;
  public c: number;
  public d: number;

  constructor() { 
    this.titulo="HOLA";
    this.pi1= 3.141592;
    this.e1=2.718281828459045;
    this.a= 1025.55;
    this.b=100.95;
    this.c=0.95;
    this.d=1.95;
  }

  terminar(){
    this._tarea = new Tarea(this._tarea.id,this._tarea.nombre)
    this._tarea.terminada =true;
    this.onTerminada.emit(this._tarea.terminada);
  }

  set tarea(t:Tarea){
    console.log("ejecuta seter");
    this._tarea = t;
    this.onTerminada.emit(false);
  }
  
  get tarea():Tarea{
    return this._tarea;
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("NG CHANGE TareaEditableComponent");
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(propName+": currentValue = "+cur+", previousValue = "+prev);
    }
  }
}
