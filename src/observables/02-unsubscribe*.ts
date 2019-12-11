
import {Observable, Observer} from 'rxjs';

/**
 * Muestra de como termina un acción en un observable para que no consuma memoria
 * y no tengas un desborde de memoria al tener un metodo que se sigue ejecutando 
 * sin que nadie lo use
 * 
 */

// Objeto encargado de escuchar las acciones 
const observer: Observer<any> = {
    next: value => console.log('Siguiente [ next]: ', value),
    error: error  => console.warn(error),
    complete: () => console.info('Completado')
} 


const intervalo$ = new Observable<number>(subscriber => {
    //Crear contador
    let value = 0;

    //Set interval es una función de js que ejecuta de forma indeterminada una función
    //cada tiempo dado en milisegundos
    
    //función a ejecutar cada 1 segundo.
    const interval =  setInterval(()=> {
        //Emitir un valor pero antes aumentar en uno al contador
        subscriber.next(++value);
        console.log(value);
    },1000);


    //Función a ejecutar al segundo 2.5
    //Completar la tarea.
    setInterval(()=>  subscriber.complete() ,2500);

    //Está función es llamada hasta que el ultimo observador
    //llame a la función unsubscribe
    return () => {
        //Dejar de ejecutar el intervalo
        clearInterval(interval);
        console.log('Intervalod destruido');
    };
});

// const subs1 = intervalo$.subscribe(num=>console.log('Num',num));
// const subs2 = intervalo$.subscribe(num=>console.log('Num',num));
// const subs3 = intervalo$.subscribe(num=>console.log('Num',num));

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

/**
 * encadenar subscriptiones
 * al llamar el ubsubscribe de la función 1 se llama
 * simultaneamente a todos los observadores
 * 
 * //Solo se llama a complete del observador 1
 */
subs1.add(subs2)
    .add(subs3);

setTimeout(()=> {
    subs1.unsubscribe();
    // subs2.unsubscribe();
    // subs3.unsubscribe();
    console.log('Completado timeout');

},6000);