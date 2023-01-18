import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
    selector: 'app-by-country',
    templateUrl: './by-country.component.html',
    styles: [
    ]
})
export class ByCountryComponent {

    public buscarPais: string = '';
    public error: boolean = false;
    public paisesArray: Country[] = [];

    constructor(private paisServices: PaisService) { }

    buscar( buscarPais: string){
        this.error = false;
        console.log(buscarPais);
        this.paisServices.findByCountryName(buscarPais).subscribe({
            next: (resp) => {
                console.log(resp);
                this.paisesArray = resp;
            },
            error: (err) => {
                this.error = true;
                this.paisesArray = [];
            }
        })
    }

    sugerencias( buscarPais: string){
        this.error = false;
        console.log(buscarPais);
    }
}
