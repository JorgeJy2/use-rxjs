import { fromEvent } from 'rxjs';
import { first, tap, map, mapTo } from 'rxjs/operators';

/**
 * Emite el primer valor
 * o emite el primer valor que cumple una función
 */


 const click$ = fromEvent<MouseEvent>(document, 'click');

 click$.pipe(
    // tap(()=>console.log('Tap')),

    tap<MouseEvent>(console.log),
    // map(event=>({
    //     clientY: event.clientY,
    //     clientX: event.clientX
    // }))

    map(({clientY,clientX})=>({clientY,clientX})),
    first(event => event.clientY>=150)
 ).subscribe({
     next: val =>console.log('Next: ', val),
     complete:() => console.log('Complete')
 });