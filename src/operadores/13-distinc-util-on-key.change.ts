
/**
 * emite valores siempre y cuando la emisión anterior no es la misma
 * con el nombre del atrivuto
 */

import {  from } from 'rxjs';
import {  distinctUntilChanged, distinctUntilKeyChanged } from 'rxjs/operators';

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
     distinctUntilKeyChanged('nombre')
 ).subscribe(console.log);