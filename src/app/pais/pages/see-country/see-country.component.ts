import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap } from 'rxjs/operators'; //recibir un observable y retornar otro observable

@Component({
    selector: 'app-see-country',
    templateUrl: './see-country.component.html',
    styles: [
    ]
})
export class SeeCountryComponent implements OnInit {

    constructor(
        private activatedRoute: ActivatedRoute,  // Necesario para poder suscribirnos a cualquier cambio de la URL
        private paisService: PaisService
    ) { }

    ngOnInit(): void {

        this.activatedRoute.params
            .pipe(
                // operadores de rxjs que trabajaran con el producto de la suscripcion o el observable
                switchMap((params) => this.paisService.seeCountryByCode(params['id'])) // se recibe el valor del observable anterior y debe retornar un nuevo observable 
            ).subscribe( ( resp ) => {
                console.log(resp)
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


