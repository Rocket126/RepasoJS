export function repetir(t,cantRep)
{   
    for(let i=0; i< cantRep;i++)console.log(t);
}

//version 2
export function rep(t,cantRep)
{
    console.log(t.concat(" ").repeat(cantRep));
    //el metodo concat() agrega un caracter espacio al final de la cadena
    //t, t tiene por valor "hola mundo". Luego se repite este string 3 veces. 

    
}




