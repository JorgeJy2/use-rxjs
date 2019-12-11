import { interval, fromEvent } from 'rxjs';
import { takeUntil, skip, tap } from 'rxjs/operators';

/**
 * Takeuntil
 * Emite valores de un obsevable hasta que se emite una valor del observable
 * numero 2 hasta ese punto se para la emisión.
 */

 /**
  * skip
  * saltar emisiones del observer
  * a un numero ejempl skip (3) ....4,5,6.....
  */
 const boton = document.createElement('button');
 boton.innerHTML= 'Detener Time';


 document.querySelector('body').append(boton);


const counter$ = interval(1000);
const clickBtn$ = fromEvent(boton, 'click').pipe(
    tap(()=>console.log('Antes del skip')),
    skip(1),
    tap(()=>console.log('Despues del skip')),

);

counter$.pipe(
    takeUntil(clickBtn$)
)
    .subscribe({
        next: value => console.log('next ', value),
        complete: () => console.log('complete')
    });