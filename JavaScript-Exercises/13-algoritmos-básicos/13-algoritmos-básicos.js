// Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.
function From1To255(){
    for (var i=1; i<=255 ; i++){
        console.log(i);
    }
}
From1To255();
// Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio. 
function SumEvenTo1000(){
    var sum = 0;
    for (var i=0; i<=1000 ; i+=2){
        sum += i;
    }
    console.log(sum);
}
SumEvenTo1000();
// Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).
function SumOddTo5000(){
    var sum = 0;
    for (var i=1; i<5000 ; i+=2){
        sum += i;
    }
    console.log(sum);
}
SumOddTo5000();
// Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14). 
function SumArray(x){
    if ( typeof x !== "object" ){
        console.log('Esta función solo acepta variables tipo Array');
        return;
    }
    if (x[0]==undefined){
        console.log('Arreglo vacio, por favor ingrese un arreglo con contenido')
        return
    }
    var sum = 0;
    for (var i=0; i<x.length ; i++){
        sum += x[i];
    }
    console.log(sum);
}
var x = [-5,2,5,12];
SumArray(x);   
// Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7). 
function FindMax(x){
    if ( typeof x !== "object" ){
        console.log('Esta función solo acepta variables tipo Array');
        return;
    }
    if (x[0]==undefined){
        console.log('Arreglo vacio, por favor ingrese un arreglo con contenido')
        return
    }
    var max = x[0];
    for (var i=0; i<x.length ; i++){
        if ( x[i] > max ){
            max = x[i];
        }
    }
    console.log('El número mayor es', max);
}
var x = [-3,3,5,7];
FindMax(x);
// Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).
function FindAvrg(x){
    if ( typeof x !== "object" ){
        console.log('Esta función solo acepta variables tipo Array');
        return;
    }
    if (x[0]==undefined){
        console.log('Arreglo vacio, por favor ingrese un arreglo con contenido')
        return
    }
    var sum = 0;
    for (var i=0; i<x.length ; i++){
        sum += x[i];
    }
    var avg = sum/x.length;
    console.log('El promedio es', avg)
}
var x = [1,3,5,7,20];
FindAvrg(x);
// Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.
function OddArray(){
    var arr = [];
    for (var i=1; i<50 ; i+=2){
        arr.push(i)
    }
    console.log(arr);
}
OddArray();
// Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7). 
function GreaterThan(x,y){
    if ( typeof x !== "object" ){
        console.log('El primer argumento de la función solo acepta variables tipo Array');
        return;
    }
    if ( typeof y !== "number" ){
        console.log('El segundo argumento de la función solo acepta variables tipo Number');
        return;
    }
    if (x[0]===undefined){
        console.log('Arreglo vacio, por favor ingrese un arreglo con contenido');
        return;
    }
    var count = 0;
    for (var i=0; i<x.length ; i++){
        if ( x[i] > y ){
            count++;
        }
    }
    console.log(count)
}
var x = [1,3,5,7];
var y = 3;
GreaterThan(x,y);
// Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).
function SquareArray(x){
    if ( typeof x !== "object" ){
        console.log('Esta función solo acepta variables tipo Array');
        return;
    }
    if (x[0]===undefined){
        console.log('Arreglo vacio, por favor ingrese un arreglo con contenido');
        return;
    }
    for (var i=0; i<x.length ; i++){
        x[i] = x[i] * x[i];
    }
    console.log(x);
}
var x = [1,5,10,-2];
SquareArray(x);
// Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).
function NoNegatives(x){
    if ( typeof x !== "object" ){
        console.log('Esta función solo acepta variables tipo Array');
        return;
    }
    if (x[0]===undefined){
        console.log('Arreglo vacio, por favor ingrese un arreglo con contenido');
        return;
    }
    for (var i=0; i<x.length ; i++){
        if ( x[i] < 0 ){
            x[i] = 0;
        }
    }
    console.log(x);
}
var x = [1,5,10,-2];
NoNegatives(x);
// Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).
function MaxMinAvrg(x){
    if ( typeof x !== "object" ){
        console.log('Esta función solo acepta variables tipo Array');
        return;
    }
    if (x[0]===undefined){
        console.log('Arreglo vacio, por favor ingrese un arreglo con contenido');
        return;
    }
    var max = x[0];
    var min = x[0];
    var sum = 0;
    var arr = [];
    for (var i=0; i<x.length ; i++){
        if ( x[i] > max ){
            max = x[i];
        }
        if ( x[i] < min ){
            min = x[i];
        }
        sum += x[i];
    }
    var avrg = sum/x.length;
    arr.push(max);
    arr.push(min);
    arr.push(avrg);
    console.log('El valor máximos es', max);
    console.log('El valor mínimo es', min);
    console.log('El promedio es', avrg);
    return arr;
}
var x = [1,5,10,-2];
console.log(MaxMinAvrg(x));
// Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). 
function ExchangeValue(x){
    if ( typeof x !== "object" ){
        console.log('Esta función solo acepta variables tipo Array');
        return;
    }
    if ( x.length < 2 ){
        console.log('La extensión mínima del arreglo es 2, por favor ingrese un arreglo más largo');
        return;
    }
    var temp = x[0];
    x[0] = x[x.length-1];
    x[x.length-1] = temp;
    console.log(x);
}
var x = [1,5,10,-2];
ExchangeValue(x);
// De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].
function NumberToString(x){
    if ( typeof x !== "object" ){
        console.log('Esta función solo acepta variables tipo Array');
        return;
    }
    if (x[0]===undefined){
        console.log('Arreglo vacio, por favor ingrese un arreglo con contenido');
        return;
    }
    for (var i=0; i<x.length ; i++){
        if ( x[i] < 0 ){
            x[i] = 'Dojo';
        }
    }
    console.log(x);
}
var x = [-1,-3,2];
NumberToString(x);