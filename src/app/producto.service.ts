import { Producto } from "./producto.module";


export class ProductosService{
    productos:Producto[] = []


    agregarProductoServicio(producto:Producto){
        this.productos.push(producto)

    }

    obtenerProductosServicio(){
        return this.productos
    }

}