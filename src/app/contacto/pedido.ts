export class Pedido{
  constructor(nombre:string, telefono:string, servicio:string, descripcion:string){
    this.nombre=nombre,
    this.telefono=telefono,
    this.servico=servicio,
    this.descripcion=descripcion
  }

  nombre:string;
  telefono:string;
  servico:string;
  descripcion:string;
}
