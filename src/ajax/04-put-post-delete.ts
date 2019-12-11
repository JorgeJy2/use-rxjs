
import {ajax} from 'rxjs/ajax';

/**
 * Peticiones AJAX metodos POST,PUT, DELETE
 * 
 * 
 * 
 */

const url = "https://httpbin.org/delay/1";

/**
 * Importante recordar debemos tener en cuenta que el metodo
 * DELETE al formar parte de una petición get primero se deben 
 * mandar los headers no solo el boy a compración de post.
 */
// ajax.post(url,{
//     id: 1,
//     name: 'Jorge'
// }, {
//     'my-token': 'ABC1234'
// }).subscribe(console.log);

ajax({
    url,
    method: 'DELETE',
    headers: {
        'my-toke': 'ABC123'
    },
    body: {
        id: 1,
        name: 'Jorge'
    }
}).subscribe(console.log);