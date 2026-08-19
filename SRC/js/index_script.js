const dado2 = document.getElementById("dado2");
const dado4 = document.getElementById("dado4");
const dado6 = document.getElementById("dado6");
const dado8 = document.getElementById("dado8");
const dado10 = document.getElementById("dado10");
const dado12 = document.getElementById("dado12");
const dado14 = document.getElementById("dado14");
const dado16 = document.getElementById("dado16");
const dado18 = document.getElementById("dado18");
const dado20 = document.getElementById("dado20");
const dado100 = document.getElementById("dado100");
const fora = document.getElementById("fora");
const input = document.getElementById('meuInput');
const form = document.getElementById('meuFormulario');


dado2.addEventListener("click", rollD2);
dado4.addEventListener("click", rollD4);
dado6.addEventListener("click", rollD6);
dado8.addEventListener("click", rollD8);
dado10.addEventListener("click", rollD10);
dado12.addEventListener("click", rollD12);
dado14.addEventListener("click", rollD14);
dado16.addEventListener("click", rollD16);
dado18.addEventListener("click", rollD18);
dado20.addEventListener("click", rollD20);
dado100.addEventListener("click", rollD100);
fora.addEventListener("click", rollD20for);

 // Dispara a cada caractere digitado. Use 'change' se quiser apenas quando o usuário sair do campo.
  input.addEventListener('input', (event) => {
    // 1. Captura o valor atual do input
    const forca = event.target.value; 
    
    // 2. Processa a informação (ex: enviar via Fetch API)
    console.log("Informação capturada:", forca);
    
    // Opcional: Enviar os dados para um servidor via API de forma silenciosa
    // fazerEnvioAutomatico(valor);
  });

  // Evita que a página recarregue caso o usuário aperte Enter
  form.addEventListener('submit', (event) => {
    event.preventDefault();
  });

function rollD20for(){
    const resultado = Math.floor(Math.random() * 20) + 1 + forca;
    alert("Resultado do dado: " + resultado);
}
function rollD2() {
    const resultado = Math.floor(Math.random() * 2) + 1;
    alert("Resultado do dado: " + resultado);
}

function rollD4() {
    const resultado = Math.floor(Math.random() * 4) + 1;
    alert("Resultado do dado: " + resultado);
}

function rollD6() {
    const resultado = Math.floor(Math.random() * 6) + 1;
    alert("Resultado do dado: " + resultado);
}

function rollD8() {
    const resultado = Math.floor(Math.random() * 8) + 1;
    alert("Resultado do dado: " + resultado);
}

function rollD10() {
    const resultado = Math.floor(Math.random() * 10) + 1;
    alert("Resultado do dado: " + resultado);
}

function rollD12() {
    const resultado = Math.floor(Math.random() * 12) + 1;
    alert("Resultado do dado: " + resultado);
}

function rollD14() {
    const resultado = Math.floor(Math.random() * 14) + 1;
    alert("Resultado do dado: " + resultado);
}

function rollD16() {
    const resultado = Math.floor(Math.random() * 16) + 1;
    alert("Resultado do dado: " + resultado);
}

function rollD18() {
    const resultado = Math.floor(Math.random() * 18) + 1;
    alert("Resultado do dado: " + resultado);
}

function rollD20() {
    const resultado = Math.floor(Math.random() * 20) + 1;
    alert("Resultado do dado: " + resultado);
}

function rollD100() {
    const resultado = Math.floor(Math.random() * 100) + 1;
    alert("Resultado do dado: " + resultado);
}