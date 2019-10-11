import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/service/carrito.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private carritoService: CarritoService) { }

  ngOnInit() {
  }

  obtenerNumeroItemsCarrito(){
    return this.carritoService.obtenerCantidadItemsCarrito();
  }

}
