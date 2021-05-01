class Persona{
    nombre;
    apellido;
    ciudad;
    edad;
    pais;
    hijo;

    constructor(nombre,apellido,edad,ciudad,pais,tieneHijo,nombreHijo,edadHijo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.ciudad = ciudad;
        this.pais = pais;
        if(tieneHijo){
            var nuevohijo = new Hijo(nombreHijo, edadHijo);
            this.hijo = nuevohijo;
        }
       
    }
}

class Hijo{
    nombre;
    edad;
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

var users = [];
console.log(users);

function addperson(){
    var name = document.getElementById('input-name').value
    var lastname = document.getElementById('input-lastname').value
    var age = document.getElementById('input-age').value
    var city = document.getElementById('input-city').value
    var country = document.getElementById('input-country').value

    var person = new Persona(name,lastname,age,city,country);
    users.push(person);
    console.log(users);
}

function showpeople(){
    document.getElementById('people').style.display = 'block'
    loadtable();
}

function loadtable(){
    var totalrows = '';
    for (var i=0; i<users.length ; i++){
        var row = '<tr>';
        row += '<th scope="row">' + (i+1) + '</th>';
        row += '<td>' + users[i].nombre + '</td>';
        row += '<td>' + users[i].apellido + '</td>';
        row += '<td>' + users[i].edad + '</td>';
        row += '<td>' + users[i].ciudad + '</td>';
        row += '<td>' + users[i].pais + '</td>';
        row += '<td><button type="button" class="btn btn-info btn-sm" onclick="editperson(' + i + ')">Editar</button><button type="button" class="btn btn-danger btn-sm" onclick="removeperson(' + i + ')">Eliminar</button><button type="button" class="btn btn-success btn-sm savebtn" id="save' + i + '" onclick="savechange(' + i + ')">Guardar</button></td>';
        row += '</tr>';
        totalrows += row;
    }
    document.getElementById('table-body').innerHTML = totalrows;
}

function removeperson(index){
    users.splice(index,1);
    loadtable();
}

function editperson(index){
    document.getElementById('input-name').value = users[index].nombre;
    document.getElementById('input-lastname').value = users[index].apellido;
    document.getElementById('input-age').value = users[index].edad;
    document.getElementById('input-city').value = users[index].ciudad;
    document.getElementById('input-country').value = users[index].pais;
    editinputstart();
    var disabledbtns = document.getElementsByClassName('btn');
    for (var i=0; i<disabledbtns.length ; i++){
        disabledbtns[i].disabled = true;
    }
    document.getElementById('save' + index +'').style.display = 'inline-block';
    document.getElementById('save' + index +'').disabled = false;
}

function savechange(index){
    users[index].nombre = document.getElementById('input-name').value;
    users[index].apellido = document.getElementById('input-lastname').value;
    users[index].edad = document.getElementById('input-age').value;
    users[index].ciudad = document.getElementById('input-city').value;
    users[index].pais = document.getElementById('input-country').value;
    loadtable();
    editinputend();
    var disabledbtns = document.getElementsByClassName('btn');
    for (var i=0; i<disabledbtns.length ; i++){
        disabledbtns[i].disabled = false;
    }
}

function editinputstart(){
    document.getElementById('input-name').style.border = '1px solid #0dcaf0'
    document.getElementById('input-lastname').style.border = '1px solid #0dcaf0'
    document.getElementById('input-age').style.border = '1px solid #0dcaf0'
    document.getElementById('input-city').style.border = '1px solid #0dcaf0'
    document.getElementById('input-country').style.border = '1px solid #0dcaf0'
    document.getElementById('advice').innerHTML = 'Edite los campos que desee'
    document.getElementById('advice').className = 'text-info'
}

function editinputend(){
    document.getElementById('input-name').style.border = '1px solid green'
    document.getElementById('input-lastname').style.border = '1px solid green'
    document.getElementById('input-age').style.border = '1px solid green'
    document.getElementById('input-city').style.border = '1px solid green'
    document.getElementById('input-country').style.border = '1px solid green'
    document.getElementById('advice').innerHTML = 'Hecho!'
    document.getElementById('advice').className = 'text-success'
}