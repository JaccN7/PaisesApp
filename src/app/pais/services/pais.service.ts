import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PaisService {

    private apiUrlBase: string = 'https://restcountries.com/v3.1'

    constructor(private http: HttpClient) { }

    findByCountryName(countryName: string): Observable<any> {
        const urlPais = `${ this.apiUrlBase }/name/${ countryName }`
        return this.http.get(urlPais);

    }
}
