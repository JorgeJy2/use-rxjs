
import {ajax} from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/5';

const obs$= ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'mi-token': 'ABC1234'
});
obs$.subscribe(console.log);

