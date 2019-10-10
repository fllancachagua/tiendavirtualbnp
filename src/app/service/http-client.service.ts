import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) {
    
   }

  buscarPublicaciones(){
    return this.httpClient.get<Book[]>('http://172.16.88.136:8090/api/seccionpersonal/tiposdocumento').pipe(
      map(data => {
         console.log(data) ;
         return data;
      }) 
    );
  }    

  obtenerPublicacion(id:string){
    return this.httpClient.get<Book>('http://172.16.88.136:8090/api/seccionpersonal/tiposdocumento'+id).pipe(
      map(data => {
         console.log(data) ;
         return data;
      }) 
    );
  }    
}
