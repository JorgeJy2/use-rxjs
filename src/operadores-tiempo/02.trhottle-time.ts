import { fromEvent, asyncScheduler } from 'rxjs';
import { throttleTime, distinctUntilChanged, pluck } from 'rxjs/operators';
/**
 * 
 * throttleTime 
 * emite el primer valor  posterior a eso emite el valor cada mislisegundo 
 * especificado .
 * 
 */

 const click$  = fromEvent(document, 'click');

 click$.pipe(
     throttleTime(3000)
 ); //.subscribe(console.log);

//Ejemplo 2

const input = document.createElement('input');

document.querySelector('body').append(input);



const input$ = fromEvent(input, 'keyup');

input$.pipe(
    throttleTime(1000, asyncScheduler,{
        leading: true, //Emitir el primer valor
        trailing: true //Emitir al ultimo valor
    }),
    pluck('target','value'),
    distinctUntilChanged()
).subscribe(console.log);
