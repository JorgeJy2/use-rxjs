import { fromEvent } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';
/**
 * Take while
 * 
 * Recibir valores meintras la condición se cumpla
 * 
 * 
 */

 const click$ = fromEvent<MouseEvent>(document, 'click');

 click$.pipe(
     map(({x,y}) => ({x,y})),
    //  takeWhile(({y})=> y <=150)
    //inclusive agrega el valor que hace que rompla la alidacion
    takeWhile(({y})=> y <=150,true)

 ).subscribe({
     next: val => console.log('next: ', val),
     complete: () =>console.log('complete')
 });
