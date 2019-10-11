import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from 'src/app/service/carrito.service';
import { BookAdded } from 'src/app/model/book-added';
import { PublicacionService } from 'src/app/service/publicacion.service';

@Component({
  selector: 'app-item-agregado',
  templateUrl: './item-agregado.component.html',
  styleUrls: ['./item-agregado.component.css']
})
export class ItemAgregadoComponent implements OnInit {
  public idItem: string;
  public book: BookAdded;
  constructor(private route: ActivatedRoute,  private carritoService: CarritoService, private publicacionService: PublicacionService) { }

  ngOnInit() {
    this.idItem= this.route.snapshot.params.id;
    this.book = this.carritoService.obtenerItemSesionCarritoCompras(this.idItem);
   }

   irAInicio(){
    this.publicacionService.irAInicio();
   }  
   
   irACarrito(){
     this.carritoService.irACarrito();
   }
}
