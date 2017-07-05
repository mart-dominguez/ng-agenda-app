import { Component, OnInit,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 
  ngOnChanges(changes: SimpleChanges) {
    console.log("NG CHANGE TAREA");
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(propName+": currentValue = "+cur+", previousValue = "+prev);
    }
  } 

}