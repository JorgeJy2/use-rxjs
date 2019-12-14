/**
 * combineLastest
 * 
 * función que nos permite mandar obserevers como argumantos conbinarlos y emitir los valores
 * de todos los observer internos simultanamentes.
 * 
 * regresa un nuevo observe el cual emite  los valores hasta que todos los observer hayan 
 * emitido al menos un valor
 *
 * 
 */

import { fromEvent, combineLatest } from 'rxjs';
import { pluck } from 'rxjs/operators';

/**
 * merge
 * recibe uno o más observables el resultado es la unión de estos obsever.
 * se completa hasta que todos sus observer se completen
 */



// const keyup$ = fromEvent(document, 'keyup');
// const click$ = fromEvent(document, 'click');

// combineLatest(
//     keyup$.pipe(pluck('type')),
//     click$.pipe(pluck('type'))
// ).subscribe(console.log);

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@gmai.com';
input2.placeholder = '******';

input2.type = 'password';

document.querySelector('body').append(input1,input2);


//helper

const getInputStream = (elem: HTMLElement) => 
    fromEvent<KeyboardEvent>(elem, 'keyup')
    .pipe(
        pluck<KeyboardEvent,string>('target','value')
    );

combineLatest(
    getInputStream(input1),
    getInputStream(input2)
).subscribe(console.log)