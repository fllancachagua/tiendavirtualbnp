import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/service/carrito.service';
import { ShoopingCart } from 'src/app/model/shooping-cart';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  carrito: ShoopingCart;
  constructor(private carritoService: CarritoService) { }

  ngOnInit() {
    this.obtenerCarritoCompras();
  }

  obtenerCarritoCompras(){
    this.carrito = this.carritoService.obtenerSesionCarritoCompras();
    console.log("carrito obtenido")
    console.log(this.carrito);
  }
}
