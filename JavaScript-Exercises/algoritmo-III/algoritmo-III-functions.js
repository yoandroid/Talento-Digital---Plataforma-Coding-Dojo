function printAverage(x){
    sum = 0;
    for (i=0; i<x.length ; i++){
        sum += x[i];
    }
    return sum/x.length
}
y = printAverage([1,2,3]);
console.log(y); 
y = printAverage([2,5,8]);
console.log(y);

function returnOddArray(){
    var z = []
    for (i=1 ; i <= 255 ; i+=2){
        z.push(i);
    }
    return z
}
y = returnOddArray();
console.log(y);

function squareValue(x){
    for (i=0 ; i<x.length ; i++){
        x[i] = x[i] * x[i]
    }
    return x;
}
y = squareValue([1,2,3]);
console.log(y);   
y = squareValue([2,5,8]);
console.log(y); 