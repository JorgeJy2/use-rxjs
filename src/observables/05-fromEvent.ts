import {fromEvent, Observer} from 'rxjs';

/**
 * fromEvent
 * Escuchar eventos del DOM 
 */

/**
 * Eventos del DOM
 */

const src$ = fromEvent<MouseEvent>(document,'click');
const src2$ = fromEvent<KeyboardEvent>(document,'keyup');

const observer: Observer<any> = {
    next: val=>console.log('Next ',val),
    error: error  => console.warn(error),
    complete: () => console.info('Completado')
}

// src$.subscribe(evento=> {
//     console.log(evento.x);
//     console.log(evento.y);
// });
/**
 * Destrucuración de EMSC6
 * 
 */

 //Solo recibir a x,y

src$.subscribe(({x,y})=> {
    console.log(x);
    console.log(y);
});
src2$.subscribe(evento=> {
    console.log(evento.key);
});