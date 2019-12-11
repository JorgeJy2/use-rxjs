import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';


const texto = document.createElement('div');

texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt, tortor ac auctor tristique, urna lacus tristique ante, sit amet laoreet turpis leo et arcu. Nulla vehicula tellus odio, ac porttitor nibh varius sed. In fermentum in nisi quis semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec elit tellus, porttitor vitae bibendum ut, semper a urna. Nulla eget metus diam. In maximus aliquam lobortis. Nam sed justo ac sem placerat pellentesque. Nam rhoncus leo non dictum aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum mattis nisl id libero ullamcorper tristique. In scelerisque ultricies ante vitae eleifend. Donec dictum, libero a lacinia auctor, orci elit tincidunt turpis, eu gravida nibh eros ac nulla.
<br>
Quisque tempus lacinia ante, sit amet maximus lacus. Integer id mollis mauris. Aliquam malesuada metus fermentum sapien tempus, iaculis ultricies dolor gravida. Integer finibus ac ligula et suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc volutpat semper tortor, ut imperdiet arcu maximus a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer odio lectus, imperdiet quis commodo a, sagittis ut sapien. Nullam porta vestibulum velit et aliquet. Pellentesque accumsan in metus ac ultrices. Praesent id porttitor turpis. Ut consectetur vulputate justo, eget efficitur mauris faucibus eu.
<br>
Ut vel nulla eget enim placerat dapibus. Sed libero tortor, suscipit eget nunc gravida, fringilla luctus nisl. Curabitur id lectus placerat dolor tristique egestas. Mauris non tortor quis est scelerisque bibendum ac vel tellus. Proin et dui scelerisque, aliquam risus et, consectetur justo. Suspendisse at maximus velit, sed facilisis orci. Nam ultrices sollicitudin vestibulum. Nulla ac vehicula leo, quis tincidunt ligula. Etiam faucibus imperdiet libero, a sagittis lectus cursus nec. Donec dignissim et lorem nec dignissim. Etiam in leo in enim mollis bibendum at eu massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet libero quis ultrices porta. Vivamus gravida lacinia placerat.
<br>
Integer hendrerit odio eget lacus suscipit laoreet. Integer quis egestas arcu. Nulla commodo enim lacinia consectetur consequat. Cras vehicula molestie nunc id rutrum. In hac habitasse platea dictumst. Aliquam condimentum felis nec orci ultricies, et vehicula mauris iaculis. Pellentesque consectetur eu tellus ut consequat. Mauris in consequat nisl, ut ultrices velit. Suspendisse at ex ante. Morbi tristique nibh risus, cursus congue nunc pellentesque quis. Phasellus mollis dolor sed porta consequat. Nullam placerat magna et nulla ornare, id malesuada nibh dictum.
<br>
Donec aliquam, leo ac molestie ultricies, felis risus gravida arcu, id venenatis arcu tortor id erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam bibendum molestie felis, vel condimentum nibh molestie in. Curabitur feugiat risus mi, id dictum urna posuere at. Vivamus eu libero nec risus blandit accumsan sed quis erat. Vivamus eget rhoncus quam. In viverra, nulla id tristique elementum, tortor tortor maximus arcu, at tincidunt eros ex sit amet augue. Pellentesque at enim elit. Quisque ut orci nulla. Donec rhoncus ante lorem, at pellentesque nibh consequat eu.
`;


const body = document.querySelector('body');

body.append(texto);


const progressBar = document.createElement('div');
progressBar.setAttribute('class','progress-bar');


body.append(progressBar);

//Función que haga el calculo
const calcularPorcentajeScroll = (event)=> {
    console.log(event);
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    console.log({
        scrollTop,
        scrollHeight,
        clientHeight
    });

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

const scrol$ = fromEvent(document,'scroll');

// scrol$.subscribe(console.log);

const progress$ = scrol$.pipe(
    // map(event => calcularPorcentajeScroll(event)),
    map(calcularPorcentajeScroll),
    tap(console.log)

);

progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
});
