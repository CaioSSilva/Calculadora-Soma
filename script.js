//Trabalhando com Input
const somar = document.getElementById("button-calc");
const apagar = document.getElementById("button-wipe");
const numero1 = document.getElementById("num1");
const numero2 = document.getElementById("num2");
//Somar Números
somar.addEventListener('click', function(){
    let resultado = Number(numero1.value) + Number(numero2.value);
    document.getElementById("txt-res").textContent=resultado;
    document.getElementById("div-resultado").style.display = "inline";
})
//Apagar Campos
apagar.addEventListener("click", function(){
    document.getElementById("div-resultado").style.display = "none";
    numero1.value='';
    numero2.value='';
})