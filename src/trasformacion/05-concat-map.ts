import { interval, fromEvent } from 'rxjs';
import { take, switchMap, concatMap } from 'rxjs/operators';
/**
 * concatMap
 * nos sirve para concatenar los observadores resultantes que puede fluir atra vez del operador 
 * la salida sera la concatenación de los valores finales
 * 
 * concatena las peticiones en una cola de procesos
 * espera que el primer observer termine la emisión para pasar con el siguiente observer...
 * a b c
 *     1 2 3 
 * 
 * a b c 1 2 3 
 * 
 * permite la ejecución secuencial..
 */


 const interal$ = interval(500).pipe( take(3));

 const click$ = fromEvent(document, 'click');

 click$.pipe(
     concatMap(()=> interal$)
 ).subscribe(console.log);