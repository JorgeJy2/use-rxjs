import { of, from } from 'rxjs';
import { distinct } from 'rxjs/operators';

/**
 * Discint
 * Pasar valores que no han sido pasados por el obsevable 
 */

 const numeros$ = of<number|string >(1,1,1,1,3,3,3,3,4,4,2,1,1,'1');

 numeros$ .pipe(
    //Usa el operador ===  equidad
     distinct()
 ).subscribe(console.log);


 interface Personaje {
     nombre: string
 }

 /**
  * Problema estos objetos no son lo mismo
  * por ls aquidad
  * un objeto no hace referncia a una referencia de memoria
  * igual
  */
 const personajes: Personaje[] = [
     {
         nombre: 'Megaman'
     },{
        nombre: 'x'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Dr. Willy'
    },
    {
        nombre: 'x'
    },
    {
        nombre: 'Zero'
    }
 ];

 from(personajes).pipe(
     //Campo que se emite...
     distinct(p=> p.nombre)
 ).subscribe(console.log);