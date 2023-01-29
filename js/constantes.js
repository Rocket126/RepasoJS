export let a = Math.PI;

export let usuario = "criss";

export let password = "qwerty";

export default function saludar()//solo puede haber una propiedad dentro del archivo js como default
{
    console.log("hola mundo");
}

export function miFuncion()
{
    console.log("funcion exportada normal");
}


//objeto persona
 export const Persona = {
    nombre:"criss",
    apellido:"valdez",
    saludar(){ 
        console.log(`hola me llamo ${this.nombre}`) 
    }
};


//creando una clase 

class automovil {
    constructor()
    {
        this.Marca = "toyota";
        this.Modelo = "yaris";
    }

    saludar(){console.log(`la marca del automovil es ${this.Marca}`)};
}
export const auto = new automovil();



//creando una arrow fuction
export let miFuncionFlecha = () => console.log("mi funcion flecha");


//llamando operador ternario
export let operador = (1>0) ? "soy un operador ternario" : "no pude ejecutarme"; 