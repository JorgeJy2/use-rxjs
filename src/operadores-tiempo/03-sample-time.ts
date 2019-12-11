import { fromEvent } from 'rxjs';
import { map, sampleTime } from 'rxjs/operators';
/**
 * sampleTime 
 * emita el ultimo valor emitido por 1 segundo 
 * si es ese intervalo de tiempo no fué emitido ningun
 * valor no es emitido.  
 */


 const click$ = fromEvent<MouseEvent>(document,'click');

 click$.pipe(
     sampleTime(2000),
     map(({x,y})=>({x,y}))

 ).subscribe(console.log);