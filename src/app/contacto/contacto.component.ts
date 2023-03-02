import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { RegistroService } from '../RegistroService';
import { Pedido } from './pedido';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {
  formulario: FormGroup;

  constructor(private builder:FormBuilder, private registro:RegistroService){
    this.formulario = builder.group({
      nombre:['', Validators.required],
      telefono:['', Validators.required],
      servicio:['', Validators.required],
      descripcion:['', Validators.required]
    })
  }

  solicitud(){
    const solicitud=this.formulario.value;
    let newProduct=new Pedido(solicitud.nombre,solicitud.telefono, solicitud.servicio, solicitud.descripcion);
    this.registro.agregarUsuarioService(newProduct);
  }
}
