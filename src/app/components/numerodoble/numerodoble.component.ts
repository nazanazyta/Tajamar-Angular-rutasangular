import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-numero-doble',
  templateUrl: './numerodoble.component.html'
})
export class NumeroDobleComponent implements OnInit {
  public doble: number;
  public numero: number;

  //CREAMOS UN MÉTODO PARA LA REDIRECCIÓN
  //EN ESTE EJEMPLO, A NOSOTROS MISMOS
  redirect(num){
    this._router.navigate( ["/numerodoble", num] );
  }

  //DEBEMOS INYECTAR LOS DOS OBJETOS PARA PODER
  //RECUPERAR RUTAS: ActivatedRoute y Router
  //EN LA INYECCIÓN (constructor) SE DECLARAN COMO private
  constructor(private _activeRoute: ActivatedRoute, private _router: Router) {
    
  }

  ngOnInit(): void {
    //DEBEMOS SUBSCRIBIRNOS AL PARÁMETRO, PARA PODER RECIBIRLO
    //DENTRO DE Params VENDRÁN LOS PARÁMETROS CON SU :name
    this._activeRoute.params.subscribe(( parametros: Params ) => {
      //HEMOS CREADO RUTAS SIN NÚMERO
      //COMPROBAMOS QUE TENEMOS PARÁMETROS
      if(parametros.numero != null){
        //LOS PARÁMETROS SON String, AUNQUE SEAN NUMÉRICOS
        this.numero = parseInt(parametros.numero);
        this.doble = this.numero * 2;
      }else{
        console.log("No hay parámetros");
      }
    });
  }

}
