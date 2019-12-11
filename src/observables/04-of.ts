import { of } from "rxjs";
/**
 * Of
 * Nos permite crear un observable por cada valor recibido. 
 * emitiará un valor a sus obervadores por cada elemento 
 * 
 */

const obs$ = of<number>(1,2,3,4,5,6,1);
/**
 * Como se puede ver este observador recibe un conjunto de datos 
 * mas no una lista sí se manda una lista of<any>([1,2,3,3]).
 * este lo tomará solo como un valor.
 */
/**
 * Sí se quiere trabajar con una lista se necesita el poperador spreat (...[array])
 * el cual retorna cada valor de forma separada ...[1,2,3]
 */
//const obs$ = of(...[1,2,3,4,5,6],1,2,3,4);

// const obs$ = of([1,2], {a:1,b:2},function(){},true,Promise.resolve(true));

/**
 * of
 * es asincrono (ejecunción de forma secuencial)
 * ejemplo
 */
console.log('Inicio of');
obs$.subscribe(
    next => {
        console.log('Siguiente ',next);
    },
    null, //No definir una función para el error.
    ()=> {
        console.log('Terminamos...');
    }
);

console.log('fin of');