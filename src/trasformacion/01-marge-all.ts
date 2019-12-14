import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, pluck, mergeAll } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { GitHubUser } from '../interfaces/github.-user.interface';
import { GitHubUsersResp } from '../interfaces/github-users.interface';

/**
 * mergerAll
 * operador 
 * sierve para trabajar con observables que retornen otros observables
 * estefinaliza hasta que el ultimo observer se complete.
 * 
 * proceso se unificar observer en una salida se conoce como
 * flatting Operator o operadores de aplanamiento.
 * 
 */

const body = document.querySelector('body');
const textInput = document.createElement('input');

const orderList = document.createElement('ol');

body.append(textInput,orderList);

//helpers

const showUser = (usuarios: GitHubUser[]) => {
    orderList.innerHTML = '';
    for(const usuario of usuarios){
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'Ver página';
        anchor.target = '_blank';

        li.append(img);
        li.append(usuario.login + ' ');
        li.append(anchor);
        
        orderList.append(li);
    }

}


//Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    //Esperar a que el usuario deje de escribir en 5 milisegundos
    debounceTime(500) ,
    pluck<KeyboardEvent,string>('target','value'),
    map<string,Observable<GitHubUsersResp>>( texto => ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)), //En este punto se retorna un observer
    mergeAll<GitHubUsersResp>(), //emite valores 
    pluck<GitHubUsersResp,GitHubUser[]>('items')
).subscribe(users=> {
    showUser(users);
    // console.log(users[0].html_url);
});