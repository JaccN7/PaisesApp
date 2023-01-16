import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalComponent } from './pais/pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pais/pages/by-country/by-country.component';
import { ByRegionComponent } from './pais/pages/by-region/by-region.component';
import { SeeCountryComponent } from './pais/pages/see-country/see-country.component';

const routes: Routes = [
    {
        path: '',
        component: ByCountryComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: ByRegionComponent
    },
    {
        path: 'capital',
        component: ByCapitalComponent
    },
    {
        path: 'country/:id',
        component: SeeCountryComponent
    },
    {
        path: '**', // Cualquier otra ruta que no este definida
        redirectTo: '' // Redirecciona a la ruta por defecto
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot( routes ) // ForRoot: Para rutas principales
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }