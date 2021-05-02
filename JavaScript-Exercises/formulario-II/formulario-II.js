function validation(){
    var rut = document.getElementById('rut').value;
    var docnumber = document.getElementById('doc-number').value
    var email = document.getElementById('email').value
    var phonenumber = document.getElementById('phone-number').value
    var usuario = new Object();
    var rutValidator = rutvalidation();
    var docnumValidator = docnumvalidation();
    var emailValidator = emailvalidation();
    var phonenumValidator = phonenumvalidation();

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
        alert('Aun no solicitas tu retiro, revisa la información del postulante presionando el botón "Volver"')
    }
    
}

function backtopersonalinfo(){
    document.getElementById('payment').style.display = 'none';
    document.getElementById('personal-info').style.display = 'block';
}

function rutvalidation(){
    var rut = document.getElementById('rut').value;
    var rutValidator = true; 
    if ( rut.length == 0 ){
        rutValidator = false;
        feedback('rutValidation','Porfavor rellene este campo','rut','1px solid red');
    }
    if ( rut.length > 9 || rut.length < 8){
        rutValidator = false;
        feedback('rutValidation','El Rut debe contener 9 u 8 caracteres numéricos','rut','1px solid red');
    }

    var patt1 = /\D/g;
    var patt2 = /k\b/g;
    var ruttest1 = patt1.test(rut);
    var ruttest2 = patt2.test(rut);
    if ( ruttest1 == true && ruttest2 == false ){
        rutValidator = false;
        feedback('rutValidation','El Rut debe contener solo numéros más el digíto verificador (puede ser k)','rut','1px solid red');
    }
    
    if ( rutValidator == true ){
        feedback('rutValidation','Rut válido','rut','1px solid green');
    }
    return rutValidator;
}

function docnumvalidation(){
    var docnumber = document.getElementById('doc-number').value
    var confdocnumber = document.getElementById('conf-doc-number').value
    var docnumValidator = true;
    if ( docnumber.length == 0 ){
        docnumValidator = false;
        feedback('doc-numberValidation','Porfavor rellene este campo','doc-number','1px solid red');
    }
    if ( confdocnumber.length == 0 ){
        docnumValidator = false;
        feedback('conf-doc-numberValidation','Porfavor rellene este campo','conf-doc-number','1px solid red');
    }

    if ( docnumber.length != 9 ){
        docnumValidator = false;
        feedback('doc-numberValidation','El Número de Serie debe contener 9 números','doc-number','1px solid red');
    }
    if ( confdocnumber.length != 9 ){
        docnumValidator = false;
        feedback('conf-doc-numberValidation','El Número de Serie debe contener 9 números','conf-doc-number','1px solid red');
    }
    var patt1 = /\D/g;
    var dnmatch = docnumber.match(patt1);
    var cdnmatch = confdocnumber.match(patt1);
    if ( dnmatch != null ){
        docnumValidator = false;
        feedback('doc-numberValidation','Este campo admite solo números, si comienza con la letra A, reemplazela por un 0','doc-number','1px solid red');
    }

    if ( cdnmatch != null ){
        docnumValidator = false;
        feedback('conf-doc-numberValidation','Este campo admite solo números, si comienza con la letra A, reemplazela por un 0','conf-doc-number','1px solid red');
    }

    if ( docnumber != confdocnumber ){
        docnumValidator = false;
        feedback('doc-numberValidation','Los Números de Serie no coinciden','doc-number','1px solid red');
        feedback('conf-doc-numberValidation','Los Números de Serie no coinciden','conf-doc-number','1px solid red');
    }
    
    if ( docnumValidator == true ){
        feedback('doc-numberValidation','Número de Serie válido','doc-number','1px solid green');
        feedback('conf-doc-numberValidation','Número de Serie válido','conf-doc-number','1px solid green');
    }
    return docnumValidator;
}

function emailvalidation(){
    var email = document.getElementById('email').value;
    var confemail = document.getElementById('conf-email').value;
    var emailValidator = true;
    if ( email.length == 0 ){
        emailValidator = false;
        feedback('emailValidation','Porfavor rellene este campo','email','1px solid red');
    }
    if ( confemail.length == 0 ){
        emailValidator = false;
        feedback('conf-emailValidation','Porfavor rellene este campo','conf-email','1px solid red');
    }

    var patt3 = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/;
    var emailtest = patt3.test(email);
    var confemailtest = patt3.test(confemail);
    if ( emailtest == false ){
        emailValidator = false;
        feedback('emailValidation','Formato de E-mail no válido','email','1px solid red');
    }
    if ( confemailtest == false ){
        emailValidator = false;
        feedback('conf-emailValidation','Formato de E-mail no válido','conf-email','1px solid red');
    }

    if ( email != confemail ){
        emailValidator = false;
        feedback('emailValidation','Los E-mail no coinciden','email','1px solid red');
        feedback('conf-emailValidation','Los E-mail no coinciden','conf-email','1px solid red');
    }

    if ( emailValidator == true ){
        feedback('emailValidation','E-mail válido','email','1px solid green');
        feedback('conf-emailValidation','E-mail válido','conf-email','1px solid green');
    }
    return emailValidator;
}

function phonenumvalidation(){
    var phonenumber = document.getElementById('phone-number').value
    var confphonenumber = document.getElementById('conf-phone-number').value
    var phonenumValidator = true;
    if ( phonenumber.length == 0 ){
        phonenumValidator = false;
        feedback('phone-numberValidation','Porfavor rellene este campo','phone-number','1px solid red');
    }
    if ( confphonenumber.length == 0 ){
        phonenumValidator = false;
        feedback('conf-phone-numberValidation','Porfavor rellene este campo','conf-phone-number','1px solid red');
    }
    if ( phonenumber.length != 8 ){
        phonenumValidator = false;
        feedback('phone-numberValidation','El Número de Celular debe contener 8 dígitos','phone-number','1px solid red')
    }
    if ( confphonenumber.length != 8 ){
        phonenumValidator = false;
        feedback('conf-phone-numberValidation','El Número de Celular debe contener 8 dígitos','conf-phone-number','1px solid red');
    }
    var patt1 = /\D/g;
    var phonetest = patt1.test(phonenumber);
    var confphonetest = patt1.test(confphonenumber);
    if ( phonetest == true ){
        phonenumValidator = false;
        feedback('phone-numberValidation','Este campo solo acepta números','phone-number','1px solid red');
    }
    if ( confphonetest == true ){
        phonenumValidator = false;
        feedback('conf-phone-numberValidation','Este campo solo acepta números','conf-phone-number','1px solid red');
    }

    if ( phonenumber != confphonenumber ){
        phonenumValidator = false;
        feedback('phone-numberValidation','Los Números de Celular no coinciden','phone-number','1px solid red');
        feedback('conf-phone-numberValidation','Los Números de Celular no coinciden','conf-phone-number','1px solid red');
    }

    if ( phonenumValidator == true ){
        feedback('phone-numberValidation','Número de Celular válido','phone-number','1px solid green');
        feedback('conf-phone-numberValidation','Número de Celular válido','conf-phone-number','1px solid green');
    }
    return phonenumValidator;
}

function feedback(id1,feed1,id2,feed2){
    document.getElementById(id1).innerHTML = feed1
    document.getElementById(id2).style.border = feed2
}
