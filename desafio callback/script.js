/* CONSIGNA
Cree una función llamada  function gastoConIva() que acepte un número y devuelva ese número más el 21% que el valor del IVA.
Luego crea una function map() que tome dos entradas o parámetros:
un array de como valores números. 
una función callback: esta función se aplica a cada elemento del array (dentro de la función map().
Haga que su function map() devuelva una nueva matriz llena de números que son el resultado de usar la función callback en cada elemento de la matriz de entrada.
*/

// gasto con IVA
console.log("Gasto con IVA")
function gastoConIva(){
    let numero= 1000;
    let conIva = numero+(numero*(21/100));
    console.log('El total con iva es: ' + conIva)
}
gastoConIva(); 

console.log("__________________________")

