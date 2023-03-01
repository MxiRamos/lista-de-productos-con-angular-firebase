import { Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { Producto } from "./producto.module";

@Injectable()
export class ProductosService{
    productos:Producto[] = []

    constructor(private dataService:DataServices){}

    agregarProductoServicio(producto:Producto){
        this.productos.push(producto)

        this.dataService.guardarProductos(this.productos)
    }

    modificarProductoServicio(indice:number, producto:Producto){
        //id
        let productoModificado = this.productos[indice]
        
        productoModificado.producto = producto.producto
        productoModificado.categoria = producto.categoria
        productoModificado.ubicacion = producto.ubicacion
        productoModificado.precio = producto.precio

        //id
        this.dataService.actualizarProductos(indice, producto)
    }

    eliminarProductoServicio(indice:number){
        this.productos.splice(indice,1)

        this.dataService.eliminarProducto(indice)

        if(this.productos != null){
            this.dataService.guardarProductos(this.productos)
        }
    }

    setEmpleados(misProductos:Producto[]){

        this.productos=misProductos
    }

    encontrarProducto(indice:number){
        let producto:Producto=this.productos[indice]
        return producto
    }

    //obtiene productos de la base de datos
    obtenerProductosServicio(){
        return this.dataService.cargarProductos()
    }

}