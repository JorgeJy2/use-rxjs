
/**
 * emite valores siempre y cuando la emisión anterior no es la misma
 */

import { of, from } from 'rxjs';
import { distinct, distinctUntilChanged } from 'rxjs/operators';


 const numeros$ = of<number|string >(1,1,1,1,3,3,3,3,4,4,2,1,1,'1');

 numeros$ .pipe(
    //Usa el operador ===  equidad
     distinctUntilChanged()
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
     }, {
        nombre: 'Megaman'
    },{
        nombre: 'x'
    },
    {
        nombre: 'Zero'
    }, {
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
     distinctUntilChanged((ant,act) => ant.nombre === act.nombre)
 ).subscribe(console.log);