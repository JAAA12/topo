import { Injectable } from "@angular/core";
import { Pedido } from "./contacto/pedido";
import { DataService } from "./DataService";

@Injectable()
export class RegistroService{
  solicitud:Pedido[]=[]

  constructor(private dataService:DataService){}

  setUsuarios(newUser:Pedido[]){
    this.solicitud=newUser;
  }

  agregarUsuarioService(newUser:Pedido){
    this.solicitud.push(newUser);
    this.dataService.registrarPedido(this.solicitud);
    alert('Se registró correctamente')
  }

  obtenerUsuarios(){
    //return this.dataService.registrarPedido();
  }
}
