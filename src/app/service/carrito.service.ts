import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { BookAdded } from '../model/book-added';
import { ShoopingCart } from '../model/shooping-cart';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() { }

  existeSesionCarritoCompras() {
    return !(sessionStorage.getItem('carrito-sesion') === null)
  }

  crearSesionCarritoCompras(){
    sessionStorage.setItem('carrito-sesion', JSON.stringify(new ShoopingCart([],0.0,0.0,0.0)));
  }

  obtenerSesionCarritoCompras() {
    let carritoCompras: ShoopingCart;
    carritoCompras =  JSON.parse(sessionStorage.getItem('carrito-sesion'));
    console.log(carritoCompras)
    return  carritoCompras;
  }  

  agregarItemASesionCarritoCompras(book:BookAdded){
    let carritoCompras: ShoopingCart;
    if (!this.existeSesionCarritoCompras()){
      this.crearSesionCarritoCompras();
    }
    carritoCompras = this.obtenerSesionCarritoCompras();
    carritoCompras.books.push(book);
    carritoCompras = this.actualizarTotalesPrecio(carritoCompras);
    this.actualizarSesionCarritoCompras(carritoCompras);
  }

  actualizarSesionCarritoCompras(carritoCompras: ShoopingCart){
    sessionStorage.setItem('carrito-sesion', JSON.stringify(carritoCompras));
    console.log("carrito updated")
    console.log(carritoCompras);
  }

  obtenerItemSesionCarritoCompras(id:string){
    let carritoCompras: ShoopingCart;
    if (this.existeSesionCarritoCompras()){
      carritoCompras = this.obtenerSesionCarritoCompras();
      return carritoCompras.books.filter(x=> x.id==id)[0];
    }else{
      return null;
    }
  }  

  public actualizarTotalesPrecio(carritoCompras: ShoopingCart){
    carritoCompras.subTotalProducto = 0.0;
    for (let i=0; i < carritoCompras.books.length;i++){
      carritoCompras.subTotalProducto += carritoCompras.books[i].subTotal;
    }
    return carritoCompras;
}  

}
