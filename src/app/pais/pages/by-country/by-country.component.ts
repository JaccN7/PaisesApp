import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
    selector: 'app-by-country',
    templateUrl: './by-country.component.html',
    styles: [`
        li{
            cursor: pointer;
        }
    `]
})
export class ByCountryComponent {

    public buscarPais: string = '';
    public paisesSugeridos: Country[] = [];
    public error: boolean = false;
    public paisesArray: Country[] = [];
    public terminoPlaceholder: string = 'Buscar país...';
    public mostrarSugerencias: boolean = false;

    constructor(private paisServices: PaisService) { }

    buscar( buscarPais: string){
        this.error = false;
        this.mostrarSugerencias = false;
        this.buscarPais = buscarPais;
        this.paisServices.findByCountryName(buscarPais).subscribe({
            next: (resp) => {
                this.paisesArray = resp;
            },
            error: (err) => {
                this.error = true;
                console.log(err);
                this.paisesArray = [];
            }
        })
    }

    sugerencias( buscarPais: string){
        this.error = false;
        this.buscarPais = buscarPais;
        this.mostrarSugerencias = true;
        this.paisServices.findByCountryName(buscarPais).subscribe({
            next: (resp) => {
                this.paisesSugeridos = resp.splice(0,3);
            },
            error: (err) => {
                this.paisesSugeridos = [];
            }
        })

    }

    buscarSugerido( buscarPais: string){
        this.buscar(buscarPais);
        
    }
}
