//Devuelve la suma de 1 a N. Por ejemplo,  Sum1toN(3) devolverá la suma de 1+2+3, la cual es 6
//sum1toN(255) devuelve la suma de todos los números de 1 a 255
function Sum1toN(n){
    var sum = 0;
    for (var i=1; i<=n ; i++){
        sum += i;
    }
    return sum;
}
//devuelve la suma del primer y último número en el array
function sumFirstLast(arr){
    return arr[0] + arr[arr.length-1];
}
//Por ejemplo, sumMaxMin([1,3,10]) debería devolver 10 + 1 = 11, y sumMaxMin([-2,-5,-10]) debería devolver -2 + -10 = -12. Una vez que hayas escrito la prueba, ejecútala (sin escribir toda la función para asegurarte de que fallen todas las pruebas), luego completa la función cerciorándote de que pase todas las pruebas. 
function sumMaxMin(arr){
    var sum = 0;
    var max = arr[0];
    var min = arr[0];
    for (var i=0; i<arr.length ; i++){
        if ( max < arr[i] ){
            max = arr[i];
        }
        if ( min > arr[i] ){
            min = arr[i];
        }
    }
    sum = max + min;
    return sum;
}
    
describe("Sum1toN", function() { 
    it("should return 3 when we pass 2 as an argument", function() { 
        expect(Sum1toN(2)).toEqual(3); 
    }); 
    it("should return 6 when we pass 3 as an argument", function() { 
        expect(Sum1toN(3)).toEqual(6); 
    }); 
    it("should return 10 when we pass 4 as an argument", function() { 
        expect(Sum1toN(4)).toEqual(10); 
    }); 
});
    
describe("sumFirstLast", function() { 
    it("should return 3 when we pass [1,2] as an argument", function() { 
        expect(sumFirstLast([1,2])).toEqual(3); 
    }); 
    it("should return 10 when we pass [2,3,8] as an argument", function() { 
        expect(sumFirstLast([2,3,8])).toEqual(10); 
    }); 
    it("should return -10 when we pass [-6,23,3,-4] as an argument", function() { 
        expect(sumFirstLast([-6,23,3,-4])).toEqual(-10); 
    }); 
});

describe("sumMaxMin", function() { 
    it("should return 11 when we pass [1,3,10] as an argument", function() { 
        expect(sumMaxMin([1,3,10])).toEqual(11); 
    }); 
    it("should return -12 when we pass [-2,-5,-10] as an argument", function() { 
        expect(sumMaxMin([-2,-5,-10])).toEqual(-12); 
    });
    it("debiera retornar 10 cuando pasamos [0,5,10] como un argumento", function() {
        expect(sumMaxMin([0,5,10])).toEqual(10);
    });  
});