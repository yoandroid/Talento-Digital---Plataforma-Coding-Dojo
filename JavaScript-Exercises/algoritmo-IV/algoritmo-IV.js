// Dados un array y un valor Y, cuenta e imprime (print) el número de valores del array que sean mayores que Y.
function MayorQue(x,y){
    var count = 0;
    for (var i=0 ; i<x.length ; i++){
        if ( x[i] > y ){
            count++
        }
    }
    console.log(count);
}
x = [1,2,3,4,5];
MayorQue(x,1);

// Dado un array, imprime los valores máximos (max), mínimos (min) y promedio (average) para el array.
function MaxMinAvrg(x){
    var sum = 0
    for (var i=0 ; i<x.length ; i++){
        for (var j=x.length-1 ; j>i ; j--){
            if ( x[i] > x[j] ){
                var temp = x[i];
                x[i] = x[j];
                x[j] = temp;
            }
        }
        sum += x[i]
    }
    var avrg = sum/x.length;
    console.log('El valor máximo es', x[x.length-1]);
    console.log('El valor mínimo es', x[0]);
    console.log('El promedio es', avrg);
}
x = [8,2,6,4,1];
MaxMinAvrg(x);

// Dado un array de números, crea una función que dé como resultado un nuevo array donde los valores negativos se reemplacen por el texto (string) ‘Dojo’. Por ejemplo, reemplazarNegativos([1,2,-3,-5,5]) debiera devolver [1,2, “Dojo”, “Dojo”, 5].
function ReemplazarNegativos(x){
    for (var i=0 ; i<x.length ; i++){
        if ( x[i]<0 ){
            x[i] = "Dojo";
        }
    }
    console.log(x)
}
x = [1,2,-3,-5,5];
ReemplazarNegativos(x);

// Dado un array y su respectivo índice, remueve los valores en el rango del índice dado( acortando el array). Por ejemplo, removerRango([20,30,40,50,60,70],2,4)debiera devolver [20,30,70].
function RemoverRango(x,y,z){
    var arr = [];
    for (var i=z+1 ; i<x.length ; i++){
        arr.push(x[i]);
    }

    for (var j=x.length ; j>y ; j--){
        x.pop();
    }

    for (var k=0; k<arr.length ; k++){
        x.push(arr[k]);
    }
    
    console.log(x);
}
x = [20,30,40,50,60,70];
RemoverRango(x,2,4);