import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarProductoComponent } from './actualizar-producto/actualizar-producto.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { ErrorComponent } from './error/error.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { LoginGuardian } from './login/login-guardian';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component:ListaProductosComponent},
  {path: 'crear', component:CrearProductoComponent, canActivate:[LoginGuardian]},
  {path: 'actualizar/:id', component:ActualizarProductoComponent,},
  {path: 'login', component:LoginComponent},
  {path: '**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule, CommonModule, HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
