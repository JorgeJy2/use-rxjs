
import {ajax, AjaxError} from 'rxjs/ajax';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const url = 'https://httpbin.org/delay/5';

const obs$= ajax.getJSON(url);
const obs2$ = ajax(url);

const manejaEror = (resp:AjaxError) => {
    console.warn('error', resp.message);
    return of([]);
}

// obs$.pipe(
//     catchError(manejaEror)
// ).subscribe(response=>console.log('',response));
// obs2$.pipe(
//     catchError(manejaEror)
// ).subscribe(response=>console.log('',response));



obs$.subscribe({
    next: val =>console.log('next ',val),
    error: err=>console.warn('error en subs', err),
    complete: () => console.log('complete')
});