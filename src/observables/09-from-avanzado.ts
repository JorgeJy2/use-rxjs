import {of, from} from 'rxjs';
import { async } from 'rxjs/internal/scheduler/async';

/**
 * 
 */


 const observer ={
     next: val => console.log('Next ', val),
     complete: ()=> console.log('Complete')
 }


 const miGenerador = function*() {
     yield 1;
     yield 2;
     yield 3;
     yield 4;
     yield 5;
     
 }

 const miIterable = miGenerador();
//  for(let id of miIterable){
//      console.log(id);
//  }
 from(miIterable).subscribe(observer);

// const source$ = from ([1,2,3,4,5]);
//Solo se llama una vez porque el parametro 1 es una lista
//const source$ = of ([1,2,3,4,5]);
//Se puede usar el operado speat
// const source$ = of (...[1,2,3,4,5]);
 
// const source$ = from ('Jorge');

const source$ = from ( fetch('https://api.github.com/users/JorgeJy2'));
// source$.subscribe(async (resp) => {
//     console.log(resp);
//     const dataRes = await resp.json();
//     console.log(dataRes);
// });




//  source$.subscribe(observer);