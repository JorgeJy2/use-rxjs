import { interval } from 'rxjs';
import { take, reduce, tap } from 'rxjs/operators';


const numbers = [1,2,3,4,5];

const  totalReduce = (acumulador: number, valorActual: number) => {
    return acumulador+ valorActual;
}

const total = numbers.reduce(totalReduce,0);
console.log('Total arr', total);

interval(500).pipe(
    take(6),
    tap(console.log),
    reduce(totalReduce)
)
.subscribe({
    next: val =>console.log('next ', val),
    complete: () => console.log('Completado')
});