import { Routes, RouterModule } from '@angular/router';
//INDICA QUE ESTE ES EL FICHERO PROVEEDOR DE RUTAS
import { HostListener, ModuleWithProviders } from '@angular/core';
//TODOS LOS COMPONENTES QUE DESEAMOS DIBUJAR DENTRO DE LA ZONA DE RUTAS
import { HomeComponent } from './components/rutas/home/home.component';
import { CineComponent } from './components/rutas/cine/cine.component';
import { MusicaComponent } from './components/rutas/musica/musica.component';
import { TeleComponent } from './components/rutas/tele/tele.component';

//NOS CREAMOS UN ARRAY DE RUTAS (NECESITA UNO O VARIOS OBJETOS
//PERO SIEMPRE CON 2 CARACTERÍSTICAS)
//LAS RUTAS LLEVAN IMPLÍCITA LA BARRA /, POR LO QUE NO HAY
//QUE PONERLAS SI SON DESDE LA RAÍZ
// { path: "cine", component: Home }
// { path: "cine/create", component: Home }
const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "musica", component: MusicaComponent },
    { path: "cine", component: CineComponent },
    { path: "tele", component: TeleComponent }
]

//PARA PODER UTILIZAR ESTA CLASE CON SUS IMPORTS INTEGRADOS
//DENTRO DE MODULES, DEBEMOS INDICAR QUE ES UN PROVEEDOR DE RUTAS
//Y DECIRLE LAS RUTAS QUE TENEMOS: appRoutes
//ESTO SON NOMBRES DE VARIABLES PARA LLAMARLAS DESDE app.module.ts
export const appRoutingProviders: any[] = [];
//ES EL NOMBRE QUE UTILIZAREMOS EN EL IMPORTS DE app.module.ts
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);