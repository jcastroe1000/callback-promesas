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

export const buscarHeroe = (id,callback)=>{

    const heroe=heroes[id];
    if(heroe){
        callback(null,heroe);
    }else{
        callback(`No existe un héroe con el id ${id}`);
    }
    
}

//callback Hell

