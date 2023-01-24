import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
    selector: 'app-by-region',
    templateUrl: './by-region.component.html',
    styles: [
    ]
})
export class ByRegionComponent {

    regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
    regionActiva: string = '';
    public regionesArray: Country[] = [];

    constructor( private paisService: PaisService) { }

    getClassCSS(region: string): string {
        return (region === this.regionActiva) ? 'btn btn-success me-3' : 'btn btn-outline-success me-3'
    }

    activateRegion(region: string) {
        //Comprobar que se presiono el mismo boton 
        if (region === this.regionActiva) { return; }

        this.regionActiva = region;
        
        this.regionesArray = [];
        this.paisService.findByRegion(this.regionActiva).subscribe(resp => {
            this.regionesArray = resp;
        })
    }

}
