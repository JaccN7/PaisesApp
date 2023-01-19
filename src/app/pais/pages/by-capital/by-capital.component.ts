import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
    selector: 'app-by-capital',
    templateUrl: './by-capital.component.html',
    styles: [
    ]
})
export class ByCapitalComponent {

    public buscarCapital: string = '';
    public error: boolean = false;
    public paisesArray: Country[] = [];
    public terminoPlaceholder: string = 'Buscar capital...';

    constructor(private paisServices: PaisService) { }

    buscar( buscarCapital: string){
        this.error = false;
        console.log(buscarCapital);
        this.paisServices.findByCapitalName(buscarCapital).subscribe({
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
}
