import { of, interval, forkJoin } from 'rxjs';
import { take, delay } from 'rxjs/operators';

/**
 * forkJoin
 * 
 * los observer que recibe como parametros deben ser finito
 * 
 * forkJoin espera a que todos los observer recibido se completen
 * una vez todos se han completado retorna un arreglo con todos
 * los valores emitidos.
 * 
 */


const numeros$ = of(1,2,3,4);
const intervalo$ = interval(1000).pipe(take(3));
const letras$ = of('a','b','c').pipe(delay(3500));

// forkJoin(
//     numeros$,
//     intervalo$,
//     letras$
// ).subscribe(console.log);

// forkJoin(
//     numeros$,
//     intervalo$,
//     letras$
// ).subscribe(resp=> {
//     console.log('numeros: ', resp[0]);
//     console.log('intervalos: ', resp[1]);
//     console.log('letras: ', resp[2]);

// });


// forkJoin({
//     numeros$,
//     intervalo$,
//     letras$
// }).subscribe(resp=> {
//      console.log(resp);
// });


forkJoin({
   num: numeros$,
   int: intervalo$,
   let: letras$
}).subscribe(resp=> {
     console.log(resp);
});