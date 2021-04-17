// Configura un array para que los valores negativos se transformen en 0. Por ejemplo, resetNegativos([1,2,-1,-3]) debiera dar como resultado [1,2,0,0].
function ResetNegativos(x){
    for (var i=0; i<x.length ; i++){
        if ( x[i]<0 ){
            x[i] = 0;
        }
    }
    console.log(x);   
}
x = [1,2,-1,-3];
ResetNegativos(x);
// Dado un array, mueve todos los valores un espacio de derecha a izquierda eliminando el primer valor y dejando un 0 para el último valor. Por ejemplo, moverAdelante([1,2,3]) debiera dar como resultado [2,3,0].
function MoveraAdelante(x){
    for (var i=0; i<x.length-1 ; i++){
        x[i] = x[i+1]
    }
    x[x.length-1] = 0
    console.log(x);
}
x = [1,2,3];
MoveraAdelante(x);
// Configura un array para que el resultado sean los valores en el orden contrario. Por ejemplo, returnReverso([1,2,3]) debe dar [3,2,1].
function ReturnReverso(x){
    var j = x.length;
    for (var i=0; i<j ; i++){
        var temp = x[i];
        x[i] = x[j-1];
        x[j-1] = temp;
        j--;
    }
    console.log(x);
}
x = [1,2,3];
ReturnReverso(x);
// Crea una función que cambie un array repitiendo sus valores originales (manteniendo el mismo orden). Por ejemplo, repetirValores([4,”Ulysses”, 42, false]) debiera dar [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].
function RepetirValores(x){
    var arr = [];
    for (var i=0; i<x.length ; i++){
        arr.push(x[i]);
        arr.push(x[i]);
    }
    console.log(arr);
}
x = [1,"Ulysses",42,false];
RepetirValores(x);