function validation(){
    var rut = document.getElementById('rut').value;
    var docnumber = document.getElementById('doc-number').value
    var confdocnumber = document.getElementById('conf-doc-number').value
    var email = document.getElementById('email').value;
    var confemail = document.getElementById('conf-email').value;
    var phonenumber = document.getElementById('phone-number').value
    var confphonenumber = document.getElementById('conf-phone-number').value
    var usuario = new Object();
// Validacion de Rut
    var rutValidator = true; 
    if ( rut.length == 0 ){
        rutValidator = false;
        document.getElementById('rutValidation').innerHTML = 'Porfavor rellene este campo'
        document.getElementById('rut').style.border = '1px solid red'
    }
    if ( rut.length > 9 || rut.length < 8){
        rutValidator = false;
        document.getElementById('rutValidation').innerHTML = 'El Rut debe contener 9 u 8 caracteres numéricos'
        document.getElementById('rut').style.border = '1px solid red'
    }

    var patt1 = /\D/g;
    var patt2 = /k\b/g;
    var ruttest1 = patt1.test(rut);
    var ruttest2 = patt2.test(rut);
    if ( ruttest1 == true && ruttest2 == false ){
        rutValidator = false;
        document.getElementById('rutValidation').innerHTML = 'El Rut debe contener solo numéros más el digíto verificador (puede ser k)'
        document.getElementById('rut').style.border = '1px solid red'
    }
    
    if ( rutValidator == true ){
        document.getElementById('rutValidation').innerHTML = 'Rut válido'
        document.getElementById('rut').style.border = '1px solid green'
    }
// Validacion de Numero de Serie
    var docnumValidator = true;
    if ( docnumber.length == 0 ){
        docnumValidator = false;
        document.getElementById('doc-numberValidation').innerHTML = 'Porfavor rellene este campo'
        document.getElementById('doc-number').style.border = '1px solid red'
    }
    if ( confdocnumber.length == 0 ){
        docnumValidator = false;
        document.getElementById('conf-doc-numberValidation').innerHTML = 'Porfavor rellene este campo'
        document.getElementById('conf-doc-number').style.border = '1px solid red'
    }

    if ( docnumber.length != 9 ){
        docnumValidator = false;
        document.getElementById('doc-numberValidation').innerHTML = 'El Número de Serie debe contener 9 números'
        document.getElementById('doc-number').style.border = '1px solid red'
    }
    if ( confdocnumber.length != 9 ){
        docnumValidator = false;
        document.getElementById('conf-doc-numberValidation').innerHTML = 'El Número de Serie debe contener 9 números'
        document.getElementById('conf-doc-number').style.border = '1px solid red'
    }

    var dnmatch = docnumber.match(patt1);
    var cdnmatch = confdocnumber.match(patt1);
    if ( dnmatch != null ){
        docnumValidator = false;
        document.getElementById('doc-numberValidation').innerHTML = 'Este campo admite solo números, si comienza con la letra A, reemplazela por un 0'
        document.getElementById('doc-number').style.border = '1px solid red'
    }

    if ( cdnmatch != null ){
        docnumValidator = false;
        document.getElementById('conf-doc-numberValidation').innerHTML = 'Este campo admite solo números, si comienza con la letra A, reemplazela por un 0'
        document.getElementById('conf-doc-number').style.border = '1px solid red'
    }

    if ( docnumber != confdocnumber ){
        docnumValidator = false;
        document.getElementById('doc-numberValidation').innerHTML = 'El Número de Serie no coincide'
        document.getElementById('doc-number').style.border = '1px solid red'
        document.getElementById('conf-doc-numberValidation').innerHTML = 'El Número de Serie no coincide'
        document.getElementById('conf-doc-number').style.border = '1px solid red'
    }

    if ( docnumValidator == true ){
        document.getElementById('doc-numberValidation').innerHTML = 'Número de Serie válido'
        document.getElementById('doc-number').style.border = '1px solid green'
        document.getElementById('conf-doc-numberValidation').innerHTML = 'Número de Serie válido'
        document.getElementById('conf-doc-number').style.border = '1px solid green'
    }
// Validacion de Email
    var emailValidator = true;
    if ( email.length == 0 ){
        emailValidator = false;
        document.getElementById('emailValidation').innerHTML = 'Porfavor rellene este campo'
        document.getElementById('email').style.border = '1px solid red'
    }
    if ( confemail.length == 0 ){
        emailValidator = false;
        document.getElementById('conf-emailValidation').innerHTML = 'Porfavor rellene este campo'
        document.getElementById('conf-email').style.border = '1px solid red'
    }

    var patt3 = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/;
    var emailtest = patt3.test(email);
    var confemailtest = patt3.test(confemail);
    if ( emailtest == false ){
        emailValidator = false;
        document.getElementById('emailValidation').innerHTML = 'E-mail no válido'
        document.getElementById('email').style.border = '1px solid red'
    }
    if ( confemailtest == false ){
        emailValidator = false;
        document.getElementById('conf-emailValidation').innerHTML = 'E-mail no válido'
        document.getElementById('conf-email').style.border = '1px solid red'
    }

    if ( email != confemail ){
        emailValidator = false;
        document.getElementById('emailValidation').innerHTML = 'Los E-mail no coinciden'
        document.getElementById('email').style.border = '1px solid red'
        document.getElementById('conf-emailValidation').innerHTML = 'Los E-mail no coinciden'
        document.getElementById('conf-email').style.border = '1px solid red'
    }

    if ( emailValidator == true ){
        document.getElementById('emailValidation').innerHTML = 'E-mail válido'
        document.getElementById('email').style.border = '1px solid green'
        document.getElementById('conf-emailValidation').innerHTML = 'E-mail válido'
        document.getElementById('conf-email').style.border = '1px solid green'
    }

// Validacion de Numero de Celular
    var phonenumValidator = true;
    if ( phonenumber.length == 0 ){
        phonenumValidator = false;
        document.getElementById('phone-numberValidation').innerHTML = 'Porfavor rellene este campo'
        document.getElementById('phone-number').style.border = '1px solid red'
    }
    if ( confphonenumber.length == 0 ){
        phonenumValidator = false;
        document.getElementById('conf-phone-numberValidation').innerHTML = 'Porfavor rellene este campo'
        document.getElementById('conf-phone-number').style.border = '1px solid red'
    }
    if ( phonenumber.length != 8 ){
        phonenumValidator = false;
        document.getElementById('phone-numberValidation').innerHTML = 'El Número de Celular debe contener 8 dígitos'
        document.getElementById('phone-number').style.border = '1px solid red'
    }
    if ( confphonenumber.length != 8 ){
        phonenumValidator = false;
        document.getElementById('conf-phone-numberValidation').innerHTML = 'El Número de Celular debe contener 8 dígitos'
        document.getElementById('conf-phone-number').style.border = '1px solid red'
    }

    var phonetest = patt1.test(phonenumber);
    var confphonetest = patt1.test(confphonenumber);
    if ( phonetest == true ){
        phonenumValidator = false;
        document.getElementById('phone-numberValidation').innerHTML = 'Este campo solo acepta números'
        document.getElementById('phone-number').style.border = '1px solid red'
    }
    if ( confphonetest == true ){
        phonenumValidator = false;
        document.getElementById('conf-phone-numberValidation').innerHTML = 'Este campo solo acepta números'
        document.getElementById('conf-phone-number').style.border = '1px solid red'
    }

    if ( phonenumber != confphonenumber ){
        phonenumValidator = false;
        document.getElementById('phone-numberValidation').innerHTML = 'Los Números de Celular no coinciden'
        document.getElementById('phone-number').style.border = '1px solid red'
        document.getElementById('conf-phone-numberValidation').innerHTML = 'Los Números de Celular no coinciden'
        document.getElementById('conf-phone-number').style.border = '1px solid red'
    }

    if ( phonenumValidator == true ){
        document.getElementById('phone-numberValidation').innerHTML = 'Número de Celular válido'
        document.getElementById('phone-number').style.border = '1px solid green'
        document.getElementById('conf-phone-numberValidation').innerHTML = 'Número de Celular válido'
        document.getElementById('conf-phone-number').style.border = '1px solid green'
    }
// Mostrar metodos de pago
    if ( rutValidator == true && docnumValidator == true && emailValidator == true && phonenumValidator == true ){
        document.getElementById('personal-info').style.display = 'none';
        document.getElementById('payment').style.display = 'block';
        usuario.rut = rut;
        usuario.docnumber = docnumber;
        usuario.email = email;
        usuario.phonenumber = phonenumber;
        console.log(usuario);
        document.getElementById('user-validator').className = 'btn btn-success btn-lg my-4 px-5'
        return usuario
    }
}

function showresume(){
    var confirmation = confirm('Está seguro de que desea enviar su solicitud de retiro de fondos?');
    if ( confirmation == true ){
        var user = validation();
        document.getElementById('payment').style.display = 'none';
        document.getElementById('resume').style.display = 'block'
        var bancoestado = document.getElementById('bancoestado')
        var otherbank = document.getElementById('otherbank')
        var cuenta2afp = document.getElementById('cuenta2afp')
        document.getElementById('payment-validator').className = 'btn btn-success btn-lg my-4 px-5'
        document.getElementById('payment-validator').disabled = true;
        document.getElementById('back').disabled = true;
        document.getElementById('userRut').innerHTML += user.rut
        document.getElementById('userDocnum').innerHTML += user.docnumber
        document.getElementById('userEmail').innerHTML += user.email
        document.getElementById('userPhonenum').innerHTML += user.phonenumber
        if ( bancoestado.checked == true ){
            user.payment = 'Cuenta RUT (Banco estado)'
            console.log(user)
            document.getElementById('userPayment').innerHTML += user.payment
        }else if ( otherbank.checked == true ){
            user.payment = 'Cuenta de otro Banco'
            console.log(user)
            document.getElementById('userPayment').innerHTML += user.payment
        }else if ( cuenta2afp == true ){
            user.payment = 'Cuenta de Ahorro Voluntaria (Cuenta 2)'
            console.log(user)
            document.getElementById('userPayment').innerHTML += user.payment
        }
    }else{
        alert('Aun no solicitas tu retiro, revisa la información del postulante antes de continuar')
    }
    
}

function backtopersonalinfo(){
    document.getElementById('payment').style.display = 'none';
    document.getElementById('personal-info').style.display = 'block';
}