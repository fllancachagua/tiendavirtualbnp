import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './publicacion/listado/listado.component';
import { DetalleComponent } from './publicacion/detalle/detalle.component';
import { FooterComponent } from './template/footer/footer.component';
import { HeaderComponent } from './template/header/header.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ItemAgregadoComponent } from './carrito/item-agregado/item-agregado.component';
import { ItemsComponent } from './carrito/items/items.component';
import { ValidarUsuarioComponent } from './carrito/validar-usuario/validar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    DetalleComponent,
    FooterComponent,
    HeaderComponent,
    ItemAgregadoComponent,
    ItemsComponent,
    ValidarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
