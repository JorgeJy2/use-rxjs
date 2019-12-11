import { interval, fromEvent } from 'rxjs';
import { sample } from 'rxjs/operators';
/**
 * Sample
 * emite el ultimo valor emitido por el observable hasta que el siguiente observable
 * emita un valor.
 * 
 * 
 * se acompleta el primer observable se termina
 */



const interval$ =interval(500);
const click$= fromEvent(document,'click');

interval$.pipe(
    sample(click$)
).subscribe(console.log);