import { interval, concat } from 'rxjs';
import { take } from 'rxjs/operators';

/**
 * concat
 * recibe un observer como parametro, un interable o un arreglo
 * 
 * crear un nuevo observer 
 * 
 * suponiendo que tenemos 3 observer el observer uno realiza todas las emisiones hasta completarse
 * contact pasa ahora emitir los valores del observer 2 hasta completarse pasa al 3 cuando este se complete
 * por se el ultimo concta igual es completado.
 * 
 * 
 */


 const interval$ = interval(1000);


 concat(
    interval$.pipe(take(3)),
    interval$.pipe(take(2)),
    [1,2,3]
 ).subscribe(console.log);
