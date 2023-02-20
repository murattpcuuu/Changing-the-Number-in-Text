const arttır = document.getElementById("arttırma");
const azalt = document.getElementById("azaltma");

let i = 0;

arttır.addEventListener("click",arttırma);
azalt.addEventListener("click",azaltma);

function arttırma(){
    i++;
    document.getElementById("sayı").innerHTML = i;
}

function azaltma(){
    i--;
    document.getElementById("sayı").innerHTML = i;
}