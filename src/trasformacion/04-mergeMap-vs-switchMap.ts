import { fromEvent, interval, pipe } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';


const click$ = fromEvent(document,'click');
const intereval$ = interval(1000);

click$.pipe(
    switchMap(()=>intereval$)
).subscribe(console.log);