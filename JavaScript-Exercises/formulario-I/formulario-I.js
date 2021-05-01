function welcome(){
    var saludo = 'Bienvenido/a: ' + document.getElementById('name').value; 
    console.log(saludo);
    document.getElementById('hi-name').innerHTML = saludo;
    var date = new Date();
    var thisyear = date.getFullYear();
    var thismonth = date.getMonth() + 1;
    
    var birth = document.getElementById('birthday').value;
    console.log(birth);
    console.log(birth.length);
    var arr = [];
    for (var i=0; i<birth.length ; i++){
        if ( birth[i] != '-' ){
            arr.push(birth[i]);
        }   
    }
    var birthage = arr[0] + arr[1] + arr[2] + arr[3];
    var birthmonth = arr[4] + arr[5];

    console.log(years);
    if ( thismonth >= birthmonth ){
        var years = thisyear - birthage;
        var months = thismonth - birthmonth;
    }else{
        var years = thisyear - birthage - 1;
        var months = 12 - (birthmonth - thismonth);
    }
    
    console.log(months);

    var saludo2 = 'Tu edad es: ' + years + ' años con ' + months + ' meses';
    document.getElementById('say-age').innerHTML = saludo2
}