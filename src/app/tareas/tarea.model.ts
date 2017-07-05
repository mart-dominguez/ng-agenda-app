export class Tarea {
  
  public id:number;
  
  public nombre:string;

  public terminada:boolean;

  constructor(id: number, nombre: string) {
    this.id=id;
    this.nombre=nombre;
    this.terminada = false;
  }
}