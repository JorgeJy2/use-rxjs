
import { range, of, from, pipe, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';


// range(1,10).pipe(
//     filter(value => value %2 ===1)
// ).subscribe(console.log);


range(1,10).pipe(
    filter((value,i) =>  {
        console.log('Index', i);
        return value %2 ===1;
    })
).subscribe(console.log);

interface Personaje {
    tipo: string;
    nombre: string;
}

const personajes:Personaje[] =  [
    {
        tipo: 'Hereo',
        nombre: 'Batman'
    },{
        tipo: 'Hereo',
        nombre: 'Robin'
    },{
        tipo: 'Villano',
        nombre: 'Joker'
    }
];


const eventHero$ = from(personajes);
const onlyHeroe$  = eventHero$.pipe(
    filter(personaje =>  personaje.tipo==='Hereo')
);
onlyHeroe$.subscribe(console.log);

/**
 * Encadenamiento siempre va en secuencia
 */
const keyup$ = fromEvent<KeyboardEvent>(document,'keyup').pipe(
    map(event => event.code), //Salida de un string
    filter(key => key ==='Enter') //Encadenamiento 
);

keyup$.subscribe(console.log);