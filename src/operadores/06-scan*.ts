import { from } from 'rxjs';
import { reduce, scan, map } from 'rxjs/operators';


const numeros = [1,2,3,4,5];

const totalAcumulador = (acc, cur) => acc + cur;

//Reduce

from(numeros).pipe(
    reduce(totalAcumulador,0)
).subscribe(console.log);


from(numeros).pipe(
    scan(totalAcumulador,0)
).subscribe(console.log);


//Redux 
/**
 *  Manejar el estado 
 */

 interface Usuario {
     id?: string;
     autenticado?: boolean;
     token?: string;
     edad?: number;
 }

 const user: Usuario[] = [
     {id:'jorge',autenticado: false,token: null},
     {id:'jorge',autenticado: false,token: 'ABC'},
     {id:'jorge',autenticado: false,token: 'ABC123'}
 ]


 const state$  = from(user).pipe(
     scan<Usuario>((acc, cur)=> {
         return {...acc, ...cur}
     }, {edad: 33})
 );

 const id$ = state$.pipe(
     map(state => state.id)
 );
id$.subscribe(console.log);
 
