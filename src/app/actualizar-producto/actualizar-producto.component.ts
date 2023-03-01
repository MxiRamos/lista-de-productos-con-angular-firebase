import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../producto.module';
import { ProductosService } from '../producto.service';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent implements OnInit {
  producto:string = ""
  categoria:string = ""
  ubicacion:string = ""
  precio:number = 0
  productos:Producto[]=[]
  indice:number=0
  

  constructor(private productosService:ProductosService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.productos=this.productosService.productos
    
    this.indice = this.route.snapshot.params['id']
  
    let producto:Producto=this.productosService.encontrarProducto(this.indice)
  
    this.producto=producto.producto
    this.categoria=producto.categoria
    this.ubicacion=producto.ubicacion
    this.precio=producto.precio

    
  }

  actualizarProducto(){
    
  }


}
