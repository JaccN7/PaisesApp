import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-country-input',
    templateUrl: './country-input.component.html',
    styles: [
    ]
})
export class PaisInputComponent {

    @Output() onEnter: EventEmitter<string>= new EventEmitter; //onEnter es el nombre del evento que se va a disparar // el tipo de onEnter es EventEmitter y el tipo de dato que va a emitir es string

    public buscarPais: string = '';

    buscar(){
        console.log(this.buscarPais);
        this.onEnter.emit(this.buscarPais);
    }
}
