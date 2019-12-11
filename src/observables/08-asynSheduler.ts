

import {asyncScheduler} from 'rxjs';

const saludar = () => console.log('Hola mundo');
const saludar2 = nombre => console.log('Hola ', nombre);

// asyncScheduler.schedule(saludar,2000);
// asyncScheduler.schedule(saludar2,2000,'Jorge');


const sub = asyncScheduler.schedule(function(state) {
    console.log('State ', state);
    this.schedule(++state,1000);
}, 3000, 0);


// setTimeout(()=> {
//     sub.unsubscribe();
// },6000);


asyncScheduler.schedule(()=> sub.unsubscribe(),6000);