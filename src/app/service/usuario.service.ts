import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('usuario-sesion');
    console.log(user)
    return !(user === null)
  }  

  logOut() {
    sessionStorage.removeItem('usuario-sesion')
  }    
}
