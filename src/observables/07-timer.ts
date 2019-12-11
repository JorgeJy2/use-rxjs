import {interval,timer } from 'rxjs';


const observe =  {
    next:val => console.log('next ',val),
    complete:() =>console.log('Completado')
}

const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

const inserval$ = interval(1000);
/**
 * 2000 = inicio
 * 1000 = intervalo
 */
//const timer$ = timer(2000,1000);

const timer$ = timer(hoyEn5);

console.log('Inicio');
timer$.subscribe(observe);
// inserval$.subscribe(observe);
console.log('fin');