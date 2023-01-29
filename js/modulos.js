console.log("Archivo emcripts 6");

import saludar, {a,usuario, password, miFuncion,Persona, auto, miFuncionFlecha,operador} from "./constantes.js"; 
console.log(a);

import {aritmetica} from "./aritmetica.js";

console.log(aritmetica.suma()); 
console.log(aritmetica.resta(3,7));

console.log(usuario);
console.log(password);
saludar();//funcion importada por default. 

miFuncion();

//llamando objeto persona
Persona.saludar();

for(const elemento in Persona)//iterando un objeto
{
    console.log(Persona[elemento]);
}






//llamando la clase automovil
//const auto = new automovil();
auto.saludar();

console.log(auto.Modelo);


//llamando a la fucion flecha
miFuncionFlecha();


//operador ternario
console.log(operador);