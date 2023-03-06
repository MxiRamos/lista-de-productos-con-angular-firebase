import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginService } from "./login/login.service";
import { Producto } from "./producto.module";


@Injectable()
export class DataServices{

    constructor(private httpClient:HttpClient,
                private loginService:LoginService){}

    cargarProductos(){

        const token=this.loginService.getIdToken()
        return this.httpClient.get<Producto[]>('https://listado-productos-100a3-default-rtdb.firebaseio.com/datos.json?auth=' + token)
    
        
    }

    guardarProductos(productos:Producto[]){

        const token = this.loginService.getIdToken()
            
        //this.httpClient.put('https://listado-productos-100a3-default-rtdb.firebaseio.com/datos.json'

        this.httpClient.put('https://listado-productos-100a3-default-rtdb.firebaseio.com/datos.json?auth=' + token , productos).subscribe(

            response=> console.log("Se han Guardado los productos" + response),

            error=> console.log("Error: " + error),
        )
    }

    //recibe un numero que seria el id de la lista
    actualizarProductos(indice:number, producto:Producto){
        const token = this.loginService.getIdToken()
            
        let url='https://listado-productos-100a3-default-rtdb.firebaseio.com/datos/' + indice + '.json?auth=' + token
            
        this.httpClient.put(url, producto).subscribe(

            response=> console.log("Se ha modificado el producto" + response),

            error=> console.log("Error: " + error),
        )
    }

    eliminarProducto(indice:number){
        const token = this.loginService.getIdToken()
    
        //let url='https://listado-productos-100a3-default-rtdb.firebaseio.com/datos/' + indice + '.json'
        let url='https://listado-productos-100a3-default-rtdb.firebaseio.com/datos/' + indice + '.json?auth=' + token
    
        this.httpClient.delete(url).subscribe(
                                response=> console.log("Se ha eliminado el producto " + response),
                                error=> console.log("Error: "+ error),
                                )
    }
}