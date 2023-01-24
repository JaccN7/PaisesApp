import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; //rxjs es una libreria reactiva, esto es para que se actualice el componente cuando cambie el valor de la variable
import { Country } from '../interfaces/pais.interface';

@Injectable({
    providedIn: 'root'
})
export class PaisService {

    private apiUrlBase: string = 'https://restcountries.com/v3.1'

    get httpParams() {
        return new HttpParams().set("fields", "name,cca2,capital,population,flags");
    }

    constructor(private http: HttpClient) { }

    findByCountryName(countryName: string): Observable<Country[]> {
        const urlPais = `${ this.apiUrlBase }/name/${ countryName }`;
        return this.http.get<Country[]>(urlPais, { params: this.httpParams });
    }

    findByCapitalName(capitalName: string): Observable<Country[]> {
        const urlCapital = `${this.apiUrlBase }/capital/${ capitalName }`;
        return this.http.get<Country[]>(urlCapital, { params: this.httpParams });
    }

    seeCountryByCode(id: string): Observable<Country[]> {
        const urlCapital = `${this.apiUrlBase }/alpha/${ id }`;
        return this.http.get<Country[]>(urlCapital);
    }

    findByRegion(region: string): Observable<Country[]> {
        const urlRegion = `${ this.apiUrlBase }/region/${ region }`;
        console.log("urlRegion: " + urlRegion);
        return this.http.get<Country[]>(urlRegion, { params: this.httpParams });
    }

}
