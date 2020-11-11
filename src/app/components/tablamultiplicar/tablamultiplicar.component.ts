import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabla-multiplicar',
  templateUrl: './tablamultiplicar.component.html'
})
export class TablaMultiplicarComponent implements OnInit {
  public operaciones: Array<string>;
  public numeros: Array<number>;
  // public numero: number;
  // public numeros = new Array<number>();
  @ViewChild("caja") caja: ElementRef;

  constructor() {
    this.numeros = [];
    // this.numero = 0;
    this.operaciones = [];
  }

  ngOnInit(): void {
  }

  sacarTabla(){
    // this.numero = parseInt(this.caja.nativeElement.value);
    for(var i = 1; i <= 10; i++){
      this.numeros.push(parseInt(this.caja.nativeElement.value)*i);
      // this.numeros.push(this.numero*i);
      this.operaciones.push(parseInt(this.caja.nativeElement.value) + " x " + i);
    }
    console.log(this.numeros);
  }

}
