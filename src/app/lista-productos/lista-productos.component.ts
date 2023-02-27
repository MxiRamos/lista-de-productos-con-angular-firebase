import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto.module';
import { ProductosService } from '../producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  producto:string=""
  categoria:string=""
  ubicacion:string=""
  precio:number=0
  productos: Producto[] = []

  constructor(private productoService:ProductosService) { }

  ngOnInit(): void {
    this.productos= this.productoService.obtenerProductosServicio()
    
  }

  agregarProducto(){
    let producto1 = new Producto(this.producto, this.categoria, this.ubicacion, this.precio)
    this.productos.push(producto1)
  }

}
