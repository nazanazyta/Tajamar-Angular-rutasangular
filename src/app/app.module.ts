import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TablaMultiplicarComponent } from './components/tablamultiplicar/tablamultiplicar.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/rutas/home/home.component';
import { MusicaComponent } from './components/rutas/musica/musica.component';
import { CineComponent } from './components/rutas/cine/cine.component';
import { TeleComponent } from './components/rutas/tele/tele.component';
//DEBEMOS IMPORTAR LOS DOS NOMBRES ANTERIORES DE app.routing.ts
import { routing, appRoutingProviders } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    TablaMultiplicarComponent,
    HomeComponent,
    MusicaComponent,
    CineComponent,
    TeleComponent
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
