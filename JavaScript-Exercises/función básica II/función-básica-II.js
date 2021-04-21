// Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, por el string “big”. Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].
function PositiveBig(x){
    for (var i=0; i<x.length ; i++){
        if ( x[i] > 0 ){
            x[i] = 'big';
        }
    }
    console.log(x);
}
var x = [-1,3,5,-5];
PositiveBig(x);
// Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números. La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor. 
function PrintMinReturnMax(x){
    var max = x[0];
    var min = x[0];
    for (var i=0; i<x.length ; i++){
        if ( x[i] > max ){
            max = x[i];
        }
        if ( x[i] < min ){
            min = x[i];
        }
    }
    console.log('El valor mínimo es', min);
    return max;
}
var x = [-1,3,5,-5];
console.log(PrintMinReturnMax(x));
// Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números. La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.
function PrintPenultimateReturnFirstOdd(x){
    if ( typeof x !== "object" ){
        console.log('Esta función solo acepta variables tipo Array');
        return;
    }
    if ( x.length < 2 ){
        console.log('La extensión mínima del arreglo es 2, por favor ingrese un arreglo más largo');
        return;
    }
    console.log(x[x.length-2]);
    for (var i=0; i<x.length ; i++){
        if ( x[i] % 2 != 0 ){
            return x[i];
        }
    }
}
var x = [4,1,5,-5];
console.log(PrintPenultimateReturnFirstOdd(x));
// Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original. 
function DoubleArray(x){
    for (var i=0; i<x.length ; i++){
        x[i] = 2 * x[i];
    }
    console.log(x);
}
var x = [4,1,5,-5];
DoubleArray(x);
// Contar Positivos -  Dado un array de números, crea una función para reemplazar el último valor con el número de valores positivos encontrados en el array. Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3].
function CountPositives(x){
    var count = 0;
    for (var i=0; i<x.length ; i++){
        if ( x[i] > 0 ){
            count++;
        }
    }
    x[x.length-1] = count;
    console.log(x);
}
var x = [-1,1,1,1];
CountPositives(x);
// Pares e Impares - Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos, imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.
function EvenAndOdd(x){
    var oddcount = 0;
    var evencount = 0;
    for (var i=0; i<x.length ; i++){
        if ( x[i] % 2 != 0 ){
            oddcount++;
            evencount = 0;
            if ( oddcount == 3 ){
                console.log('¡Qué imparcial!')
            }
        }
        if ( x[i] % 2 == 0 ){
            evencount++;
            oddcount = 0
            if ( evencount == 3 ){
                console.log('¡Es para bien!')
            }
        }
    }
}
var x = [1,1,1,2,2,2];
EvenAndOdd(x);   
// Incrementa los Segundos - Dado un array de números arr, agrega 1 a cualquier otro elemento, específicamente a aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc). Luego, console.log cada valor del array y devuelve arr. 
function PlusOneOdd(){
    for (var i=0; i<x.length ; i++){
        if ( i % 2 != 0 ){
            x[i] = x[i] + 1;
        }
    }
    console.log(x);
    return x
}
var x = [1,2,3,4,5,6];
console.log(PlusOneOdd(x));
// Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) que contiene strings, reemplaza cada string con un número de acuerdo cantidad de letras (longitud) del string anterior. Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver [“programar”,9, 4]. Pista: ¿For loops solo puede ir hacia adelante?
function PrevLength(x){
    for (var i=x.length-1; i>0 ; i--){
        x[i] = x[i-1].length;
    }
    console.log(x);
}
var x = ['programar','dojo', 'genial'];
PrevLength(x);
// Agrega Siete - Construye una función que acepte un array. Devuelve un nuevo array con todos los valores del original, pero sumando 7 a cada uno. No alteres el array original. Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array. 
function PlusSeven(x){
    for (var i=0; i<x.length ; i++){
        x[i] = x[i] + 7;
    }
    console.log(x);
}
var x = [1,1,1,2,2,2];
PlusSeven(x);
// Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3]. Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores).
function ReverseArray(x){
    var j = x.length;
    for (var i=0; i<j ; i++){
        var temp = x[i];
        x[i] = x[j-1];
        x[j-1] = temp;
        j--
    }
    console.log(x);
}
var x = [3,1,6,4,2];
ReverseArray(x);
// Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original, pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5].
function TurnIntoNegative(x){
    for (var i=0; i<x.length ; i++){
        if ( x[i] > 0 ){
            x[i] = -x[i];
        }
    }
    console.log(x);
}
var x = [1,-3,5];
TurnIntoNegative(x);
// Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de los valores sea “comida”. Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez. 
function ForEverHungry(x){
    var count = 0;
    for (var i=0; i<x.length ; i++){
        if ( typeof x[i] == 'string' ){
            var str = x[i];
            var upstr = str.toUpperCase();
            if ( upstr == 'COMIDA' ){
                console.log('yummy');
                count++
            }
        }
        
    }
    if ( count == 0 ){
        console.log('tengo hambre');
    }
}
var x = [1,-3,'comida',5];
ForEverHungry(x);
// Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc. Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”, 2, true]. cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez. 
function ExchangeEvenPosition(x){
    var j = x.length - 1
    for (var i=0; i<=j ; i++){
        if ( i % 2 == 0 ){
            var temp = x[i];
            x[i] = x[j];
            x[j] = temp;
            j -= 2;
        }
    }
    console.log(x);
}
var x = [1,2,3,4,5,6];
ExchangeEvenPosition(x);
// Escala el Array - Dado un array arr y un número num, multiplica todos los valores en el array arr por el número num, y devuelve el array arr modificado. Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9].
function AmplifyArray(x,y){
    for (var i=0; i<x.length ; i++){
        x[i] = x[i] * y;
    }
    console.log(x);
}
var x = [1,2,3,4,5,6];
var y = 3;
AmplifyArray(x,y);