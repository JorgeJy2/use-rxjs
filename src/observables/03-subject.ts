import { Observable, Observer, Subject } from 'rxjs';

/**
 * Subject
 * 
 * Cuando creamos un Objeto de la clase Observable al usar la función next(value)
 * este emite un valor unico para cada observador de dicha clase.
 * 
 * el ejemplo perfecto se puede mostrar al crear una instancia de la clase Observable
 * que cada segundo con el metodo setInterval() emita un número random cada segundo
 * sí a este objeto nos suscribimos observaremos que el vaor recibido es diferente para
 * cada observador. 
 * 
 * esto puede ser un problema es por eso que existe la clase subject
 * La clase subject nos permite manejar un brocast para eo objeto Observer
 * para emitir una unica salida para todos los observer.
 * 
 * caracteristicas:
 * casteo multiple //Muchas subscripciones están subjetas a este mismo observable
 * Tambien es un Observer no solo es un Observable
 * Por ende se puede usar los metodos next,err,complete
 * 
 * file: 03-subject.ts
 * 
 */

 /**
  * Observer es una instancia de la clase Observer que escucha a cualquier tipo de dato
  * emitido por un objeto de tipo Observable, imprimiento en consola cualquiera
  * de las acciones que son posibles para un observer.
  */
const observer: Observer<any> = {
    next: value=> console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('Completado')
};

/**
 * inservalo$ instancia de un Observable es una instancia de la clase Observable que 
 * emite cada 1 segundo un número random
 * 
 */
const intervalo$ = new Observable<number>(subs => {

    //Emitir un valor aleatorio cada segundo
    //conservar la refencia a intervalo para terminarlo 
    // cuando no tenga refeencias.
    const intervalId= setInterval(()=> subs.next(Math.random()),1000);

    //cuando ya no cuenta con subscriptores se llama a return 
    return ()=> {
        //Terminar el proceso de emitir una función cada 1 segundo
        clearInterval(intervalId);
        console.log('Intervalo destruido');
    }
});

const subject$ = new Subject();
/**
 * Se puede ver que se comporta como obsever al subcribirnos al observable invervalo$
 */
const subscriptionI = intervalo$.subscribe(subject$);

/**
 * Se puede observar como se comporta como observable al  permitir que se subcriban a el
 */
const sub1= subject$.subscribe(observer);
const sub2= subject$.subscribe(observer);

/**
 * A los 3.5 segundo se ejecuta la siguiente función para terminar el proceso
*/
setTimeout(()=> {
    //emitir numero a todo los observer del subjet
    //que estén péndientes
    subject$.next(10);

    subject$.complete();

    /**
     * En estos momentos ya se terminó las subscriciones a subjet
     * Pero aun falta termina la subscripcion general a  subscriptionI
     */

    subscriptionI.unsubscribe();
},3500);