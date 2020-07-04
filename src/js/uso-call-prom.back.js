import './style.css';
import {buscarHeroe as buscarHeroeCallBack} from './js/callbacks';
import {buscarHeroe} from './js/promesas';

const heroeId ='capi';
const heroeId1='iron';


//callback
/*  buscarHeroe(heroeId,(err,heroe)=>{
     if (err){  return console.error (err);}
     buscarHeroe(heroeId1,(err,heroe1)=>{
        if (err){  return console.error (err);}
        console.log (`Invocando a ${heroe.nombre} y ${heroe1.nombre}`);
     });
    
}); */



/* buscarHeroe(heroeId).then(heroe =>{
    //console.log (`Invocando a ${heroe.nombre}`);
    buscarHeroe(heroeId1).then (heroe1 =>{
        console.log (`Invocando a ${heroe.nombre} y ${heroe1.nombre}`);
    });
}) */


Promise.all([buscarHeroe(heroeId),buscarHeroe(heroeId1)])

.then(([heroe,heroe1])=>{
//console.log ('Promise.all' ,heroes);
console.log (`Invocando a ${heroe.nombre} y ${heroe1.nombre}`);
}).catch(err=>{
    alert(err);
}).finally(()=>{
console.log('se termino el promise.all');
});

console.log ('fin de programa');