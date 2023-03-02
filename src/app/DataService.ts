import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Pedido } from "./contacto/pedido";

@Injectable()
export class DataService{
  constructor(private http: HttpClient){}

  registrarPedido(pedido:Pedido[]){
    this.http.put('https://topo-efe85-default-rtdb.firebaseio.com/pedido.json', pedido).subscribe({
      next:response => {console.log('Su solicitud ha sido enviada exitosamente',response)},
      error: error => {console.log('error',error)}
    })
  }
}
