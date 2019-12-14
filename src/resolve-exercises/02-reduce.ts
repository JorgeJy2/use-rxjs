import { from } from 'rxjs';
import { reduce, filter } from 'rxjs/operators';

/**
 * Ejercicio: 
 * Sume todos los números del arreglo usando un reduce.
 * Debe de filtrar para que sólo números sean procesados
 * La salida debe de ser 32
 * 
 * Tip:
 * isNan() es una función de JavaScript para determinar si es número
 * Usar filter<any>(...) para no tener problemas de tipado.
 */

 //helpers

 const totalReduce = (acumulador: number, valorActual:number)=> 
     acumulador+valorActual;


(() =>{


  const datos = [1, 2, 'foo', 3, 5, 6, 'bar', 7, 8];

  from(datos).pipe(
    // Trabajar aquí
    filter<any>(value => !isNaN(value)),    
    reduce<any>(totalReduce)
  ).subscribe( console.log ) // La salida debe de ser 32



})();

		