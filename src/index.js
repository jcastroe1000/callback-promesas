//import {promesaLenta,promesaMedia,promesaRapida} from './js/promesas';
import {buscarHeroe,buscarHeroeAsync } from './js/promesas';
import {obtenerHeroesArr, obtenerHeroeAwait,heroesCiclo,hereoIfAwait} from  './js/await';


/* promesaLenta.then(console.log);
promesaMedia.then(mensaje => console.log(mensaje));
promesaRapida.then(console.log); */

/* Promise.race([promesaLenta,promesaMedia,promesaRapida])
        .then(console.log)
        .catch(console.warn);
 */
/* buscarHeroe('capi2')
        .then(console.log)
        .catch(console.warn);
buscarHeroeAsync('iron2')
        .then(console.log)
        .catch(console.warn); */
/* 
console.time ('await'); */

/* obtenerHeroeAwait('capi2')
        .then(heroe =>{
                console.log(heroe);
                console.timeEnd('await');
        }).catch (console.warn);
 */

//heroesCiclo();
hereoIfAwait('capi');