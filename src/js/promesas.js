const heroes={
    capi:{
        nombre:'Capitan America',
        poder  :'El super escudo'
    },
    iron:{
        nombre: 'Ironman',
        poder : 'Super inteligente'
    },
    spider:{
        nombre:'Spider-Man',
        poder :'Super telaraña'
    }
}

export const buscarHeroe = (id) =>{
    const heroe = heroes[id];
    return new Promise((resolve,reject)=>{
        if(heroe){
            setTimeout(()=>{
              resolve(heroe);
            },1000);
            
        }else{
            reject(`No existe un héroe con el id ${id}`);
        }


    });
}

//con Async
export const buscarHeroeAsync = async(id) =>{
    const heroe = heroes[id];
  
        if(heroe){
            return heroe;
        }else{
            throw `No existe un héroe con el id ${id}`;
        }
}



const promesaLenta = new Promise((resolve,reject)=>{
    setTimeout(() =>resolve('Promesa Lenta'),2000);
});

const promesaMedia = new Promise((resolve,reject)=>{
    setTimeout(() =>resolve('Promesa Mediaa'),1500);
});

const promesaRapida = new Promise((resolve,reject)=>{
    setTimeout(() =>resolve('Promesa Rapida'),1000);
});

export{
    promesaLenta,
    promesaMedia,
    promesaRapida
}



