var numero = "";
var sqr = 0; var sqroot = 0; var fact = 1; var sum = 0; var mul = 0; var res = 0; var div = 0; var ans = 0;

function AddNum(x){
    numero = numero + x;
    document.getElementById('txtNumeros').value = numero;
}

function AddDecimal(){
    var validator = true;
    for (var i=0; i<numero.length ; i++){
        if ( numero[i] == '.' ){
            validator = false;
        }
    }
    if( validator == true){
        numero = numero + ".";
        document.getElementById('txtNumeros').value = numero;
    }
}

function Clear(){
    numero = "";
    sqr = 0; sqroot = 0; fact = 1; sum = 0; mul = 0; res = 0; div = 0; ans = 0;
    document.getElementById('txtNumeros').value = numero;
}

function Squared(){
    if ( ans != 0 ){
        sqr = parseFloat(ans) * parseFloat(ans);
        document.getElementById('txtNumeros').value = sqr;
        ans = sqr;
        sqr = 0
    }else{
        sqr = parseFloat(numero) * parseFloat(numero);
        document.getElementById('txtNumeros').value = sqr;
        ans = sqr;
        sqr = 0
    }
}

function SquareRoot(){
    if ( ans != 0 ){
        sqroot = Math.sqrt(parseFloat(ans));
        document.getElementById('txtNumeros').value = sqroot;
        ans = sqroot;
        qroot = 0
    }else{
        sqroot = Math.sqrt(parseFloat(numero));
        document.getElementById('txtNumeros').value = sqroot;
        ans = sqroot;
        qroot = 0
    }  
}

function Factorial(){
    var validator = true;
    for (var i=0; i<numero.length ; i++){
        if ( numero[i] == '.' ){
            validator = false;
        }
    }
    if( validator == true){
        if ( ans != 0 ){
            for (var i=1; i<=parseInt(ans) ; i++){
                fact = fact*i;
            }
            document.getElementById('txtNumeros').value = fact;
            ans = fact;
            fact = 1;
        }else{
            for (var i=1; i<=parseInt(numero) ; i++){
                fact = fact*i;
            }
            document.getElementById('txtNumeros').value = fact;
            ans = fact;
            fact = 1;
        }
        
    }
}

function Sum(){
    if ( ans != 0 ){
        sum = ans;
    }else{
        sum = numero;
    }
    numero = "";
    document.getElementById('txtNumeros').value = numero;
}

function Mul(){
    if ( ans != 0 ){
        mul = ans;
    }else{
        mul = numero;
    }
    numero = "";
    document.getElementById('txtNumeros').value = numero;
}

function Res(){
    if ( ans != 0 ){
        res = ans;
    }else{
        res = numero;
    }
    numero = "";
    document.getElementById('txtNumeros').value = numero;
}

function Div(){
    if ( ans != 0 ){
        div = ans;
    }else{
        div = numero;
    }
    numero = "";
    document.getElementById('txtNumeros').value = numero;
}

function Ans(){
    if ( sum != 0 ){
        ans = parseFloat(sum) + parseFloat(numero);
        document.getElementById('txtNumeros').value = ans;
        sum = 0;
    }
    if ( mul != 0 ){
        ans = parseFloat(mul) * parseFloat(numero);
        document.getElementById('txtNumeros').value = ans;
        mul = 0;
    }
    if ( res != 0 ){
        ans = parseFloat(res) - parseFloat(numero);
        document.getElementById('txtNumeros').value = ans;
        res = 0;
    }
    if ( div != 0 ){
        ans = parseFloat(div) / parseFloat(numero);
        document.getElementById('txtNumeros').value = ans;
        div = 0;
    }    
}