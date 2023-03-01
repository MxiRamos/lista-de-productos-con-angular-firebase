import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../producto.module';
import { ProductosService } from '../producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  producto:string=""
  categoria:string=""
  ubicacion:string=""
  precio:number=0
  productos: Producto[] = []
  
  constructor(private router:Router,
              private productoService:ProductosService) { }

  ngOnInit(): void {
  }


  agregarProducto(){
    let producto1 = new Producto(this.producto, this.categoria, this.ubicacion, this.precio)
    if(producto1.producto === "" || producto1.categoria === "" || producto1.ubicacion === ""){
      this.router.navigate([''])
    }else{
      this.productoService.agregarProductoServicio(producto1)
      this.router.navigate([''])
    }
    
  }
}
