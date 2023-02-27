export class Producto{

    producto:string=""
    categoria:string=""
    ubicacion:string=""
    precio:number=0
    

    constructor(producto: string, categoria: string, ubicacion: string, precio: number){

                    this.producto=producto
                    this.categoria=categoria
                    this.ubicacion=ubicacion
                    this.precio=precio
                }

}