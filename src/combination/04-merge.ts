import { fromEvent,merge } from 'rxjs';
import { pluck } from 'rxjs/operators';

/**
 * merge
 * recibe uno o más observables el resultado es la unión de estos obsever.
 * se completa hasta que todos sus observer se completen
 */



const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

merge(
    keyup$.pipe(pluck('type')),
    click$.pipe(pluck('type'))
).subscribe(console.log);