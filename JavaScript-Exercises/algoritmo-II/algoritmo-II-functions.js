function printUpTo(x) {
    if (x>=0) {
        for ( i=1; i<=x; i++ ) {
            console.log(i);
        }
    }
    if ( x < 0 ) {
        console.log('false');
    }
}
printUpTo(1000); 
y = printUpTo(-10); 
console.log(y) ;

function printSum(x) {
    var sum = 0;
    for (i=0; i<=x; i++) {
        console.log(i)
        sum += i;
        console.log(sum);
    }
    return sum
}
y = printSum(255);   
console.log(y);      

function printSumArray(x) {
    var sum = 0;
    for(var i=0; i<x.length; i++) {
        sum += x[i]
    }
    return sum;
}
console.log( printSumArray([1,2,3]) ); 

function LargestElement(x) {
    var max = x[0]
    for (i=0 ; i<x.length ; i++) {
        if ( x[i] > max ) {
            max = x[i]
        }
    }
    console.log(max);
}
LargestElement([1,30,5,7])