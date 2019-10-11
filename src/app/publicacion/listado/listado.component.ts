import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { Router } from '@angular/router';
import { PublicacionService } from 'src/app/service/publicacion.service';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  books: Book[] = [];
  constructor(private publicacionService: PublicacionService, private router: Router) { }

  ngOnInit() {
    console.log("disolucion");
   this.books = this.publicacionService.buscarPublicaciones();
   
  }

  getColorDisponibilidad(disponibilidad:string){
    return (disponibilidad==='DISPONIBLE')?"label label-success":"label label-danger";
  }

  verDetallePublicacion(bookId: string){
   // this.router.navigate(['']);
    this.router.navigate(['/detalle']);
    alert("libro seleccionado: "+bookId);
   // this.router.navigate(['/publicaciones/detalle/'+bookId]);
  }

}
