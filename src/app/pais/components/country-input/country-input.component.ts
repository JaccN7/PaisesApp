import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
    selector: 'app-country-input',
    templateUrl: './country-input.component.html',
    styles: [
    ]
})
export class PaisInputComponent implements OnInit {

    @Output() onEnter: EventEmitter<string> = new EventEmitter; //onEnter es el nombre del evento que se va a disparar // el tipo de onEnter es EventEmitter y el tipo de dato que va a emitir es string

    @Output() onDebounce: EventEmitter<string> = new EventEmitter; //onDebounce se emitira cuando se deje de escribir

    //un debouncer es un temporizador que se ejecuta cuando se deja de escribir
    debouncer: Subject<string> = new Subject; //Subject es un observable

    public buscarPais: string = '';

    ngOnInit() {
        //ngOnInit se dispara una única vez cuando el componente se inicializa
        this.debouncer
        .pipe(
            //pipe es un operador que permite ejecutar operaciones sobre el observable y transformar la salida de un observable
            debounceTime(300) //no se ejecutara el subscribe hasta que se deje de escribir por 300 milisegundos
        )
        .subscribe(valorBuscado => {
            console.log('debouncer: ',valorBuscado);
            this.onDebounce.emit(valorBuscado);
        })
    }

    buscar() {
        console.log("input: "+this.buscarPais);
        this.onEnter.emit(this.buscarPais);
    }

    pressKey() {
        this.debouncer.next(this.buscarPais); //next es el método que se ejecuta cuando se dispara el observable
    }
}
