import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';

/**
 * tap sirve para ver el estado de datos en el flujo
 * sin afectar en nada  los datos
 */

const numeros$ = range(1,5);
numeros$.pipe(
    tap(x  =>{
        console.log('Antes', x);
        return 100;
    }),
    map(val => val * 10),
    // tap(x  =>{
    //     console.log('Respues', x);
    //     return 100;
    // })
    tap({
        next: valor => console.log('Siguiente: ', valor),
        complete: () =>console.log('Completado')
    })
).subscribe(val => console.log('sub', val));
