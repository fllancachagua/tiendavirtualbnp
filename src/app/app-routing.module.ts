import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './publicacion/listado/listado.component';
import { DetalleComponent } from './publicacion/detalle/detalle.component';
import { ItemAgregadoComponent } from './carrito/item-agregado/item-agregado.component';
import { ItemsComponent } from './carrito/items/items.component';
import { ValidarUsuarioComponent } from './carrito/validar-usuario/validar-usuario.component';

const routes: Routes = [
  {path: '',component: ListadoComponent},
  {path: 'publicaciones',component: ListadoComponent},
  {path:'publicacion/:id', component: DetalleComponent},        
  {path:'itemAgregado/:id', component: ItemAgregadoComponent},        
  {path:'carrito', component: ItemsComponent},        
  {path:'checkout-user', component: ValidarUsuarioComponent},        
  {path: '', redirectTo: '/publicaciones', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
