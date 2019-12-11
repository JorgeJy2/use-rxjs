import { range, fromEvent } from 'rxjs';
import {map, pluck, mapTo} from 'rxjs/operators';

// range(1,5).pipe(
//     map<number,string>(val => (val*10).toString())
// )
// .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document,'keyup');

const keyupCode$= keyup$.pipe(
    map(event=> event.code) 
);

const keyupPluck$ = keyup$.pipe(
    pluck('target','baseURI')
);



const keyupMatTo$ = keyup$.pipe(
   mapTo('Tecla presionada')
);

keyup$.subscribe(console.log);
keyupCode$.subscribe(val => console.log('map', val));


keyupPluck$.subscribe(val => console.log('pluck', val));

keyupMatTo$.subscribe(val => console.log('mapTo', val));
