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
  indice:number = 0

  

  constructor(private productoService:ProductosService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.productos= this.productoService.obtenerProductosServicio()

    
    
  }

  agregarProducto(){
    let producto1 = new Producto(this.producto, this.categoria, this.ubicacion, this.precio)
    this.productos.push(producto1)
  }

  eliminarProducto(){
    this.router.navigate(['crear'])
  }
  
  editarProducto(){
    this.router.navigate(['/crear'])
  }
}
