import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  indice:number = 0
  

  constructor(private productosService:ProductosService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {

    this.productos=this.productosService.productos
    
    // para obtener el id con el valor del array que queremos modificar en la base de datos
    this.indice = this.route.snapshot.params['id']
  
    let producto:Producto=this.productosService.encontrarProducto(this.indice)
  
    this.producto=producto.producto
    this.categoria=producto.categoria
    this.ubicacion=producto.ubicacion
    this.precio=producto.precio

    
  }

  actualizarProducto(){
    let miProducto = new Producto(this.producto, this.categoria, this.ubicacion, this.precio)
    
    this.productosService.modificarProductoServicio(this.indice, miProducto)
    this.router.navigate([''])
  
  }


}
