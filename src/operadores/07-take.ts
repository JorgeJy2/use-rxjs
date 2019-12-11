import { of } from 'rxjs';
import { take, tap } from 'rxjs/operators';

/**
 * Take
 * 
 * limita la cantidad de emisiones que realiza el observador
 * llamando al complete..
 * 
 */


 const numeros = of(1,2,3,4,5).pipe (
     tap(console.log)
     //Demostración de que el take afecta el observer principal y no solo al observer hijo.
 );
 
 numeros.pipe(

    tap(console.log), //Demostrar que solo toma las emisiones limitadolas por el take
     //Limitar las emisiones en el numero del take
     //Sí el número es muy alto excediendose del la longitud
     //el observador se completa primero...
     take(3)
 ).subscribe({
     next: val => console.log('next: ', val),
     complete:() => console.log('Completado')
 });