
function touchRock() {
    var userName = prompt("Qual é o seu nome?");

    if (userName){
        alert("Prazer em ti conhecer " + userName + ".");
        document.getElementById("rockImg").src = "https://i.pinimg.com/originals/df/72/33/df72333c26e2eece5f5a08e51e990edf.png";
        document.getElementById("text").innerHTML="";
    }
    
    if (userName) {
        setTimeout("document.getElementById('rockImg').src='https://i.pinimg.com/474x/48/80/9b/48809b84353e9aebef7b6f3d7c3e1263.jpg';document.getElementById('text').innerHTML='Vc me deixou sozinho novamente, clique em mim pra falar comigo dnovo!!!';",10000);
    }



}

/*
//Criando uma função de cookie para ajudar o iRook a lembrar que é o usuário

function writeCookie(name, value, days) {
    var expires = "";

//Especificação do número de dias, tornando a variável mais persistente
if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toGMTString();
}
//Atribuir o nome, valor e data de validade ao cookie
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function readCookie(name){
//Busque o cookie especificado e retorne seu valor
    var searchName = name + "=";
    var cookies = document.cookie.split(';');
    for (var i=0; i < cookies.length; i++){
        var c = cookies[i];
        while (c.charAt (0) == ' ') c = c.substring(1,c.length);
        if (c.indexOf(searchName) == 0)
        return c.substring(searchName.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
//Apague o Cookie especificado
    writeCookie(name, "", -1);
}



function greetUser() {
    userName = readCookie("irock_username");
    if (userName)
        alert("olá" + userName + ", senti sua falta.");
    else
        alert('oi, eu sou uma rocha de estimação');
}




//Definindo o cookie
if (userName) {
    writeCookie("irock_username", userName, 5 * 365);
}
document.getElementById("rockImg").src = "https://i.pinimg.com/originals/df/72/33/df72333c26e2eece5f5a08e51e990edf.png";
*/