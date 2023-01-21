import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators'; //SwitchMap: recibir un observable y retornar otro observable // tap: recibe el valor del observable anterior y lo imprime en consola
import { Country, Translation } from '../../interfaces/pais.interface';

@Component({
    selector: 'app-see-country',
    templateUrl: './see-country.component.html',
    styles: [
    ]
})
export class SeeCountryComponent implements OnInit {

    public country!: Country; // se inicializa con el signo de admiracion para que acepte el valor null

    constructor(
        private activatedRoute: ActivatedRoute,  // Necesario para poder suscribirnos a cualquier cambio de la URL
        private paisService: PaisService
    ) { }

    ngOnInit(): void {

        this.activatedRoute.params
            .pipe(
                // operadores de rxjs que trabajaran con el producto de la suscripcion o el observable
                switchMap((params) => this.paisService.seeCountryByCode(params['id'])), // se recibe el valor del observable anterior y debe retornar un nuevo observable 
                tap(console.log) // el tap recibe el valor del observable anterior (switchMap) y lo imprime en consola
            ).subscribe( ( resp ) => {
                console.log(resp[0].translations)
                this.country = resp[0]
            })

        /* this.activatedRoute.params // se esta utilizando la desestructuracion de objetos
            .subscribe( ({ id }) => {
                console.log( id );
                this.paisService.seeCountryByCode( id ).subscribe( pais => {
                    console.log( pais );
                })
            }) */
    }

}


