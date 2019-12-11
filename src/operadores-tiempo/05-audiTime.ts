import { fromEvent } from 'rxjs';
import { auditTime, tap, map } from 'rxjs/operators';
/**
 * audiTime
 * emitir el ultimo valor que ha sido emitido en el observer por un periodo de tiempo 
 * establecido 
 */

 const click$ = fromEvent<MouseEvent>(document, 'click');

 click$.pipe(
     map(({x}) => x),
     tap(val=>console.log('tap', val)),
     auditTime(2000)
 ).subscribe(console.log);