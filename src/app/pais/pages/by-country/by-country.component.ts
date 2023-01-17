import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
    selector: 'app-by-country',
    templateUrl: './by-country.component.html',
    styles: [
    ]
})
export class ByCountryComponent {

    public buscarPais: string= '';

    constructor(private paisServices: PaisService) { }

    buscar(){
        console.log(this.buscarPais);
        this.paisServices.findByCountryName(this.buscarPais).subscribe(resp => {
            console.log(resp);
        });
    }
}
