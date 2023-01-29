export function suma(a=2 , b=4)
{
  return a+b;
}

export function resta(a,b)
{
    return a-b;
}

//creamos un objeto e incluimos nuestras funciones adentro de esta.
export const aritmetica = 
{
  suma,
  resta
};