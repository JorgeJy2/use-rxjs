
/**
 * exhaustMap
 * 
 * solo mantiene una instancia a un observer 
 * mienstra esté reciba valores sin finalizar ignora a las demas pticones
 * hasta que se librere y  puede escuchar nuevas emisiones. 
 * 
 * 
 * se puede aplicar cuando un  ubserver envia mucho spam
 * ejemplo cuando se presiona muchas veces el boton enter en un formulario
 * poque solo nos interesa la primer emisión. 
 */


import { interval, fromEvent } from 'rxjs';
import { take, exhaustMap } from 'rxjs/operators';


 const interal$ = interval(500).pipe( take(3));

 const click$ = fromEvent(document, 'click');

 click$.pipe(
     exhaustMap(()=> interal$)
 ).subscribe(console.log);