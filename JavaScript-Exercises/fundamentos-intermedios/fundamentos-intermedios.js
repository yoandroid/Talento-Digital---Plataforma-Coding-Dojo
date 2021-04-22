// Sigma - Implementa una función sigma(num) que, dado un número, devuelve la suma de todos los enteros positivos (incluyendo el número dado). Ej: sigma(3) = 6 (1+2+3); sigma(5) = 15 (1+2+3+4+5).
function sigma(num){
    var sum = 0;
    for (var i=0; i<=num ; i++){
        sum += i;
    }
    console.log(sum);
    return sum;
}
sigma(3);
// Factorial - Escribe una función factorial(num) que, dado un número, devuelva el producto (multiplicación) de todos los enteros positivos (incluyendo el número dado). Por ejemplo: factorial(3) = 6 (1*2*3); factorial(5) = 120 (1*2*3*4*5).
function factorial(num){
    var fact = 1;
    for (var i=1; i<=num ; i++){
        fact = fact * i;
    }
    console.log(fact);
    return fact;
}
factorial(5);
// Fibonacci - Crea una función para generar números de Fibonacci. En esta famosa secuencia matemática, cada número es la suma de las dos anteriores, partiendo con los valores 0 y 1. Tu función debería aceptar un argumento, un índice en la secuencia (donde 0 corresponde al valor inicial, 4 corresponden al valor cuatro más tarde, etc). Ejemplos: fibonacci(0) = 0 (dado), fibonacci(1) = 1 (dado), fibonacci(2) = 1 (fib(0)+fib(1), o 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, o 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8). Haz esto primero sin usar recursión. Si no sabes qué es una recursión, no te preocupes puesto que vamos a introducir este concepto en la Parte 2 de esta actividad. 
function fibonacci(x){
    // var fib = [0,1,1,2,3,5,8,13,21,34];
    // fib(0) = 0;
    // fib(1) = 1;
    // fib(2) = fib(0) + fib(1) = 1;
    // fib(3) = fib(1) + fib(2) = 2;
    // fib(4) = fib(2) + fib(3) = 3;

    var arr = [0,1];
    if ( x == 0 ){
        return arr[0]
    }
    if ( x == 1 ){
        return arr[1]
    }
    for (var i=2; i<=x ; i++){
        arr.push( arr[i-2] + arr[i-1] );
    }
    console.log(arr[x]);
    return arr;
}
console.log(fibonacci(3));
// Array: Penúltimo: Devuelve el penúltimo elemento del array. Dado [42,true,4,”Liam”, 7] devuelve “Liam”. Si el array es muy pequeño, devuelve null.  
function ReturnPenultimate(x){
    if ( x.length < 2 ){
        return null;
    }
    console.log(x[x.length-2]);
    return x[x.length-2];
}
var x = [42,true,4,'Liam', 7];
ReturnPenultimate(x);
// Array: “N” último: Devuelve el elemento “N” último. Dado ([5,2,3,6,4,9,7],3], devuelve 6. Si el array es muy pequeño, devuelve null. 
function UltimateN(x,y){
    var j = x.length - 1;
    if ( j - y < 0 ){
        return null
    }
    console.log(x[j - y]);
    return x[j-y]
}
var x = [5,2,3,6,4,9,7];
var y = 6;
UltimateN(x,y);
// Array: Segundo más grande: Devuelve el segundo elemento más grande de un array. Dado [42,1,4,3.14,7], devuelve 7.  Si el array es muy pequeño, devuelve null.
function AlmostBigger(x){
    var len = x.length;
    for (var i=0; i<len ; i++){
        for (var j=len-1; j>i ; j--){
            if ( x[i] > x[j] ){
                var temp = x[i];
                x[i] = x[j];
                x[j] = temp;
            }
        }
    }
    console.log(x);
    return x[len - 2];
}
var x = [42,1,4,3.14,7];
AlmostBigger(x);
// Doble Problema Par: Crea una función que cambie un array dado duplicando cada uno de sus elementos en una posición par, y manteniendo el orden original. Convierte [4, "Ulysses", 42, false]   a    [4,4, "Ulysses", "Ulysses", 42, 42, false, false].
function DoubleEvenPosition(x){
    var arr = [];
    for (var i=0; i<x.length ; i++){
        if ( i % 2 == 0 ){
            arr.push(x[i]);
            arr.push(x[i]);
        }else{
            arr.push(x[i]);
        }
    }
    console.log(arr);
}
var x = [4, "Ulysses", 42, false];
DoubleEvenPosition(x);

// Crea una función Fib(n) que devuelve el enésimo número Fibonacci. Usa recursión para esto. 
function fib(n){
    if (n == 0 || n == 1){
        return n
    }
    return fib(n-2) + fib(n-1)
}
console.log(fib(8));
// Relleno recursivo - por favor mira más abajo.