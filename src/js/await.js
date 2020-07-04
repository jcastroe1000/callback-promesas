import { buscarHeroeAsync,buscarHeroe } from "./promesas";

const heroesIds= ['capi','iron','spider'];
const heroesPromesas= heroesIds.map(id=>buscarHeroe(id));


export const obtenerHeroesArr = async() =>{


  /*   const heroesArr =[];
    for (const id of heroesIds){
        heroesArr.push(buscarHeroe(id));
         
    } */
    
    /* setTimeout(()=>{
        console.log('obtener Heroes');
        console.table(heroesArr);
    },1000);
 */
  
    /* return await Promise.all(heroesArr); */


    return await Promise.all(heroesIds.map(buscarHeroe));

};

export const obtenerHeroeAwait = async(id) =>{

    try{
        const heroe = await buscarHeroeAsync (id);
        return  heroe;
    }catch(err){
        console.log('Errorr Catch');
        return {
            nombre:'Sin nombre',
            poder: 'sin poder'
        };
    }
    
}


export const heroesCiclo = async()=>{
    console.time('HeroesCiclo');
    /* const heroes = await Promise.all(heroesPromesas);
    heroes.forEach(heroe => console.log(heroe)); */
    for await( const heroe of heroesPromesas){
            console.log(heroe);
    }
    console.timeEnd('HeroesCiclo');
}

export const hereoIfAwait =async (id) =>{
    if ((await buscarHeroeAsync(id)).nombre === 'capi'){
        console.log('Es el mejor de todos');
    }else{
        console.log('Mentira');
        
    }
}