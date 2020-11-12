import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TablaMultiplicarComponent } from './components/tablamultiplicar/tablamultiplicar.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/rutas/home/home.component';
import { MusicaComponent } from './components/rutas/musica/musica.component';
import { CineComponent } from './components/rutas/cine/cine.component';
import { TeleComponent } from './components/rutas/tele/tele.component';
import { MenuComponent } from './components/rutas/menu/menu.component';
//DEBEMOS IMPORTAR LOS DOS NOMBRES ANTERIORES DE app.routing.ts
import { routing, appRoutingProviders } from './app.routing';
import { Error404Component } from './components/rutas/error404/error404.component';
import { NumeroDobleComponent } from './components/numerodoble/numerodoble.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaMultiplicarComponent,
    HomeComponent,
    MusicaComponent,
    CineComponent,
    TeleComponent,
    MenuComponent,
    Error404Component,
    NumeroDobleComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    , routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
