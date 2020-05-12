function modal(){
    var ele = document.getElementById("mBox");
    
    ele.classList.add("show");
    ele.classList.remove("hide");
}
function f1() {
    var ele = document.getElementById("mBox");

    ele.classList.add("hide");
    ele.classList.remove("show");
}
function enterBtn(){
    var ele = document.getElementById("mBox");
    var nome = document.getElementById("nome");
    var cognome = document.getElementById("cognome");
    var errNome = document.getElementById("errNome");
    var pass = document.getElementById("pwd").value;
    var passRep = document.getElementById("rePwd").value;

    var ris = chkPwd(pass, passRep);
    
    console.log(ris);
    

    if(nome.value == "" || cognome.value == ""){
        nome.classList.add("err");
        errNome.classList.add("errShow");
    }
    else{
        nome.classList.remove("err");
        errNome.classList.remove("errShow");

        if(ris == true){
            alert("ok");
            ele.classList.add("hide");
            ele.classList.remove("show");
        }
        else{
            alert("not ok");
        }
    }
}

function chkPwd(pwd1, pwd2){
    return (pwd1 == pwd2) ? true : false;
}