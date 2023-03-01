import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
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
  

  

  constructor(private productoService:ProductosService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    //this.productos= this.productoService.obtenerProductosServicio()

    this.productoService.obtenerProductosServicio().subscribe(misProductos=>{

      this.productos=Object.values(misProductos)

      this.productoService.setEmpleados(this.productos)
    })
    
  }

  

  eliminarProducto(indice:number){
    this.productoService.eliminarProductoServicio(indice)
  }

}
