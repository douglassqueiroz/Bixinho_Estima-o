/*function touchRock() {
    var userName = prompt("Qual é o seu nome?");

if (userName) 
    alert("Prazer em ti conhecer, " + userName + ".");
    document.getElementById("rockImg").src = "https://cdn.pixabay.com/photo/2020/12/27/20/25/smile-5865209_960_720.png";
}*/


//Caso o cliente clique no emogi, ocorretá a mudança da primeira para a segunda imagem
function touchRock() {
    document.getElementById("rockImg").src = "https://cdn.pixabay.com/photo/2020/12/27/20/25/smile-5865209_960_720.png";
}

//Caso o cliente não clique no emogi pela quantidade de tempo determinada pelo parâmetro setTimeOut, ocorrerá a mudança de emogi e ele ficará triste.
function finishTime() {
document.getElementById("rockImg").src = "https://cdn.pixabay.com/photo/2020/12/27/20/25/smile-5865209_960_720.png";
}
setTimeout(finishTime, 7000);

