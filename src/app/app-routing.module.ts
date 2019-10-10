import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './publicacion/listado/listado.component';
import { DetalleComponent } from './publicacion/detalle/detalle.component';
import { ItemAgregadoComponent } from './carrito/item-agregado/item-agregado.component';

const routes: Routes = [
  {path: '',component: ListadoComponent},
  {path: 'publicaciones',component: ListadoComponent},
  {path:'publicacion/:id', component: DetalleComponent},        
  {path:'itemAgregado/:id', component: ItemAgregadoComponent},        
  {path: '', redirectTo: '/publicaciones', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
