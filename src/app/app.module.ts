import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductosService } from './producto.service';
import { ActualizarProductoComponent } from './actualizar-producto/actualizar-producto.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { DataServices } from './data.services';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    CrearProductoComponent,
    ActualizarProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [ProductosService, DataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
