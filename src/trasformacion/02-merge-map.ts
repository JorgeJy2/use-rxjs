import { of, interval, fromEvent } from 'rxjs';
import { mergeMap, take, map, mergeMapTo, takeUntil } from 'rxjs/operators';
/**
 * MargeMap
 * trafiera el valor resulto por el obvserver ejecutado el cual es mandado 
 * como parametro
 * mergeMap(val=>interval(1000))
 * callback que retorna un observable
 * 
 * finaliza hasta que termina el ultimo observable
 * 
 */

 const letras$ = of('a','b','c');
 letras$.pipe(
     mergeMap(letra=>interval(1000).pipe(
        map(i => letra  + i),

        take(3)
         ))
 )
//  .subscribe({
//      next: val  => console.log('next: ', val),
//      complete: () =>console.log('complete')
//  });
  

const mouseDown$ = fromEvent(document,'mousedown');
const mouseup$ = fromEvent(document,'mouseup');
const interval$ = interval ();

/**
 * mostrar el tiempo del presionado al mouse
 */
mouseDown$.pipe(
    mergeMap(()=>interval$.pipe(
        takeUntil(mouseup$)
    ))
).subscribe(console.log);
