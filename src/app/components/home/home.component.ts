import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  //Obtener datos especificos de la data de la peticion
  paises: any[] = [];

  constructor(private http: HttpClient) {

    console.log('Constructor del Home hecho');
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
      .subscribe((resp: any) => {
        //cuando se obtenga la informacion, voy hacer que this.paises sea igual a la respuesta
        this.paises = resp;
        console.log(resp);
      })
   }

  ngOnInit() {
  }

}
