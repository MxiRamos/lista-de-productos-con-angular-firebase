import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';

const routes: Routes = [
  {path: '', component:ListaProductosComponent},
  {path: 'crear', component:CrearProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
