import { of } from 'rxjs';
import { startWith, endWith } from 'rxjs/operators';

/**
 * startWith
 * emte un valor antes de que el observe lo haga aun que sea ooperador sincrono
 * 
 * primer la emisión la realiza startWith.
 */

 /**
  * Of por naturaleza es sincrono.
  */

 const numeros$ =  of (1,2,3).pipe( 
     startWith('a','b','c'),
     endWith('x','y','c')
 );



numeros$.subscribe(console.log);

/**
 * endwith
 * emitir al final el valor pasado por parametro en endWith
 */

