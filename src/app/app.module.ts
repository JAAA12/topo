import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { ErrorComponent } from './error/error.component';


const appRoutes:Routes=[
  {path:'', component:HomeComponent},
  {path:'servicios', component:ServiciosComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'**', component:ErrorComponent}
  /* los asterístcos le dicen que si es diferente */
   /* el path del error debe ir SIEMPRE de último */
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiciosComponent,
    ContactoComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
