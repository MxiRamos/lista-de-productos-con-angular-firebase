import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Producto } from "./producto.module";


@Injectable()
export class DataServices{

    constructor(private httpClient:HttpClient){}

    cargarProductos(){


        return this.httpClient.get('https://listado-productos-100a3-default-rtdb.firebaseio.com/datos.json')
    }

    guardarProductos(productos:Producto[]){

        this.httpClient.put('https://listado-productos-100a3-default-rtdb.firebaseio.com/datos.json', productos).subscribe(

            response=> console.log("Se han Guardado los productos" + response),

            error=> console.log("Error: " + error),
        )
    }

    //recibe un numero que seria el id de la lista
    actualizarProductos(indice:number, producto:Producto){
            
        let url='https://listado-productos-100a3-default-rtdb.firebaseio.com/datos/' + indice + '.json'
        
        
        this.httpClient.put(url, producto).subscribe(

            response=> console.log("Se ha modificado el producto" + response),

            error=> console.log("Error: " + error),
        )
    }

    eliminarProducto(indice:number){
    
        let url='https://listado-productos-100a3-default-rtdb.firebaseio.com/datos/' + indice + '.json'
    
        this.httpClient.delete(url).subscribe(
                                response=> console.log("Se ha eliminado el producto " + response),
                                error=> console.log("Error: "+ error),
                                )
    }
}