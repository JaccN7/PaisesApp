import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; //rxjs es una libreria reactiva, esto es para que se actualice el componente cuando cambie el valor de la variable
import { Country } from '../interfaces/pais.interface';

@Injectable({
    providedIn: 'root'
})
export class PaisService {

    private apiUrlBase: string = 'https://restcountries.com/v3.1'

    constructor(private http: HttpClient) { }

    findByCountryName(countryName: string): Observable<Country[]> {
        const urlPais = `${ this.apiUrlBase }/name/${ countryName }`;
        return this.http.get<Country[]>(urlPais);
    }

    findByCapitalName(capitalName: string): Observable<Country[]> {
        const urlCapital = `${this.apiUrlBase }/capital/${ capitalName }`;
        return this.http.get<Country[]>(urlCapital);
    }

    seeCountryByCode(id: string): Observable<Country> {
        const urlCapital = `${this.apiUrlBase }/alpha/${ id }`;
        return this.http.get<Country>(urlCapital);
    }


}
