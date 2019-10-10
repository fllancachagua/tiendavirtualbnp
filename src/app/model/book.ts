import { BookPrices } from './book-prices';
import { Indice } from './indice';
import { Materia } from './materia';

export class Book {
    public id:string;
    public titulo:string;
    public autor: string;
    public acercaAutor: string;
    public fechaPublicacion: string;
    public anio:string;
    public isbn: string;
    public resenia: string;
    public paginas: string;
    public peso:string;
    public ancho:string;
    public altura:string;
    public formato:string;
    public disponibilidad: string;
    public foto: string;
    public precios: BookPrices[];
    public indice: Indice[];
    public materia: Materia[];

    constructor(id:string, titulo:string,  autor: string, acercaAutor:string, fechaPublicacion: string,   anio:string,
                isbn: string,   resenia: string,   paginas: string,peso:string, 
                ancho:string, altura:string, formato:string, disponibilidad:string, precios: BookPrices[], indice: Indice[], materia: Materia[], foto: string){
     this.id = id;
     this.titulo    = titulo;
     this.autor     = autor;
     this.acercaAutor     = acercaAutor;
     this.fechaPublicacion =fechaPublicacion;
     this.anio      = anio;
     this.isbn      = isbn;
     this.resenia  = resenia;
     this.paginas     = paginas;
     this.peso        = peso;
     this.ancho       = ancho;  
     this.altura      = altura;     
     this.formato   = formato;
     this.foto        = foto;
     this.disponibilidad = disponibilidad;
     this.precios     = precios;
     this.indice = indice;
     this.materia = materia;
    }
}
