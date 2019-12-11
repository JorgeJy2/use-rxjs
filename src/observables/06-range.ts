import { of,range, asyncScheduler } from 'rxjs';

// const src$ = of (1,2,3,4,5);
// Rango no es de unicio a fin 
// es primer valor el incio del conteo
// segundo valor cuantos interacciones hará
//valor por defecto es 0

/**
 * Crear función asyncrona asyncScheduler
 */
const src$ = range(1,5,asyncScheduler);
console.log('Inicio');
src$.subscribe(console.log);
console.log('Fin');