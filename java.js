/**
 * Created by Junior on 17/11/2015.
 */

function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);
    if ((usuario.length >= 1) && (dominio.length >= 3) && (usuario.search("@") == -1) && (dominio.search("@") == -1) && (usuario.search(" ") == -1) && (dominio.search(" ") == -1) && (dominio.search(".") != -1) && (dominio.indexOf(".") >= 1) && (dominio.lastIndexOf(".") < dominio.length - 1)) {
        document.getElementById("msgemail").innerHTML = "E-mail valido";
        alert("E-mail valido");
    } else {
        document.getElementById("msgemail").innerHTML = "<font color='red'>E-mail invalido </font>";
        alert("E-mail invalido");
    }
}

function test(phoneInput){
    var re = /^(\(11\) [9][0-9]{4}-[0-9]{4})|(\(1[2-9]\) [5-9][0-9]{3}-[0-9]{4})|(\([2-9][1-9]\) [5-9][0-9]{3}-[0-9]{4})$/;
    var OK = re.exec(phoneInput.value);
    if (!OK)
        window.alert(RegExp.input + " nao e um numero de telefone com codigo de area!");
    else
        window.alert("Obrigado, seu numero de telefone e" + OK[0]);
}


function Campos() {
    var campos = document.getElementsByName("nome");

    for (var i = 0; i < campos.length; i ++) {
        if (campos[i].value == null || campos[i].value == "") {
            campos[i].classList.add('erro');
        } else {
            campos[i].classList.remove('erro');
        }
    }
}

function Sexo(){
    var sexo = document.getElementsByName('sexo');
     document.getElementById('sexos').classList.add('erro');

    for(var i = 0; i < sexo.length; i++){
        if(sexo[i].checked){
            document.getElementById('sexos').classList.remove('erro');
            break;
        }
    }


}

function validarCheck(){
    var check = document.getElementsByName('opcoes');
    document.getElementById('valid').classList.add('erro');

    for(var i = 0; i < check.length; i++){
        if(check[i].checked) {
            document.getElementById('valid').classList.remove('erro');
        }
    }
}

function validarCity(){
    var c = document.getElementsByName("nome1");

    for (var i = 0; i < c.length; i ++) {
        if (c[i].value == null || c[i].value == "") {
            c[i].classList.add('erro');
        } else {
            c[i].classList.remove('erro');
        }
    }
}

function validar(){
    Sexo();
    validarCheck();
    Campos();
    validarCity();
}