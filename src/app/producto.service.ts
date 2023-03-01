import { Producto } from "./producto.module";


export class ProductosService{
    productos:Producto[] = []


    agregarProductoServicio(producto:Producto){
        this.productos.push(producto)

    }

    modificarProductoServicio(index:number, producto:Producto){
        let producto1 = this.productos[index]
        producto1.producto = producto.producto
        producto1.categoria = producto.categoria
        producto1.ubicacion = producto.ubicacion
        producto1.precio = producto.precio
    }

    encontrarProducto(indice:number){
        let producto:Producto=this.productos[indice]
        return producto
    }

    obtenerProductosServicio(){
        return this.productos
    }

}