
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

    


