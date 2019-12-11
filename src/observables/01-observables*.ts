import {Observable, Observer} from 'rxjs';

/**
 * Observables 
 * Demostración de uso de observables el como crear una instancia de la clase Observable y como
 * crear una instancia de la clase Observer que esté al pendiente de los cambios emitidos por
 * la instancia de Obervable a la que nos subscribimos. 
 *  
 * file: 01-observables.ts
 */

 
 /**
  * Instancia de la clase observer que define el comportamiento que debe tener ante la emición de 
  * una acción por parte de la instancia de la clase Observable
  * 
  * opciones: 
  * next: se recibe un valor <value> cada vez que la clase Observer emita un valor
  * errror: se recibe un valor con el error sí ocurre en  la instancia de la clase Observer
  * complete está función es llamada cuando se termina la emisión de valores por parte del Observer
  */

const observer: Observer<any> = {
    next: value => console.log('Siguiente [ next]: ', value),
    error: error  => console.warn(error),
    complete: () => console.info('Completado')
}

// const obs$ = Observable.create();

/**
 * Instancia de la clase Observable definiendo entre <> llamados operadores diamante
 * o operadores genericos que tipo de dato se manejará. 
 * 
 *  *Es buena práctica llamar a los observer con una $ al final del nombre para identificalos.
 */
//
const obs$ = new Observable<String>( subs=> {
    //Emitir el valor hola
    subs.next('Hola');
    //Emitir el valor mundo
    subs.next('Mundo');

    //forzar un error
    const a = undefined;
    a.nombre = 'Jacobo';

    //Completar la emisión
    subs.complete();
    //Aquí termina la emisión 
    //Todos serán ignorados
    subs.next('Hola');
    subs.next('Mundo');
});


/**
 * Para escuchar los eventos del observer
 * debesmos subscribirnos a el 
 */

 /**
  * EExisten diferentes formas de subscribirnos a un observer
  * 
  * La primera es mandar un objeto de tipo
  * Observer que define las funciones para las 3 posibles operaciones de acción
  * para el observer.
  */
obs$.subscribe(observer);

/**
 * La segunda es declarar al instante las acciones a realizar con las acciones que emite
 * el observable
 */

 /**
  * La siguiente forma es solo declarar la función next en modo de flecha para la subscripcion
  * obs$.subscribe(console.log);
  */

// obs$.subscribe(
//     valor=> console.log('next: ', valor),
//     error => console.error(error),
//     ()=> console.log('Completado'));

/**
 * Cosas a considerar. 
* Los observer solo funciona hasta que exista un observador
*/