import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicacionService } from 'src/app/service/publicacion.service';
import { Book } from 'src/app/model/book';
import { ShoopingCart } from 'src/app/model/shooping-cart';
import { CarritoService } from 'src/app/service/carrito.service';
import { BookAdded } from 'src/app/model/book-added';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  idBook: string;
  book: Book;
  constructor(private route: ActivatedRoute,private router: Router, private publicacionService: PublicacionService, private carritoService: CarritoService) { }

  ngOnInit() {
    this.idBook= this.route.snapshot.params.id;
    this.book = this.publicacionService.obtenerPublicacion(this.idBook);
  }

  agregarItemACarrito(id:string,titulo:string, autor:string,presentacion:string,precioSoles:string, foto:string){
    this.carritoService.agregarItemASesionCarritoCompras(new BookAdded(id,titulo,autor,presentacion,+precioSoles,1,+precioSoles,foto));
    this.router.navigate(['/itemAgregado',id]);
  }

  getColorDisponibilidad(disponibilidad:string){
    return (disponibilidad==='DISPONIBLE')?"label label-success":"label label-danger";
  }  
}
