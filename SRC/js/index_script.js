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

function rollD20for() {
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

let PvAtual = 20;
let PvMaxima = 20;

let Vigor = 0;
let forca = 0;
let intelecto = 0;
let animo = 0;
let carisma = 0;

let PeAtual = 10;
let PeMaxima = 10;

let defesa;
let reflexo;
let percepcao;
let iniciativa;
let coragem;
let dano;
let precisao;


function atualizarBarra() {

    // Calcula a porcentagem do pv e do pe para mudar a barra
    let porcentagemPv = (PvAtual / PvMaxima) * 100;
    let porcentagemPe = (PeAtual / PeMaxima) * 100;

    // Impede passar dos limites
    porcentagemPv = Math.max(0, Math.min(100, porcentagemPv));
    porcentagemPe = Math.max(0, Math.min(100, porcentagemPe));

    // Muda o tamanho da barra de acordo com a porcentagem calculada
    document.getElementById("vida").style.width =
        porcentagemPv + "%";
    document.getElementById("pe").style.width =
        porcentagemPe + "%";

    // Atualiza o número
    document.getElementById("textoPv").textContent =
        PvAtual + " / " + PvMaxima;
    document.getElementById("textoPe").textContent =
        PeAtual + " / " + PeMaxima;


}
function atualizarPvMaximo() {

    PvMaxima = 20 + (Vigor * 5);

    // Se o PV atual ficar maior que o novo máximo
    if (PvAtual > PvMaxima) {
        PvAtual = PvMaxima;
    }

    atualizarBarra();
}
function atualizarPeMaximo() {

    PeMaxima = 10 + (forca * 5);

    // Se o PE atual ficar maior que o novo máximo
    if (PeAtual > PeMaxima) {
        PeAtual = PeMaxima;
    }

    atualizarBarra();
}

function alterarVida(valor) {

    PvAtual += valor;

    // Não deixa a vida ficar negativa
    if (PvAtual < 0) {
        PvAtual = 0;
    }

    // Não deixa ultrapassar a vida máxima
    if (PvAtual > PvMaxima) {
        PvAtual = PvMaxima;
    }

    atualizarBarra();

}
function alterarEnergia(valor) {

    PeAtual += valor;

    // Não deixa a energia ficar negativa
    if (PeAtual < 0) {
        PeAtual = 0;
    }

    // Não deixa ultrapassar a energia máxima
    if (PeAtual > PeMaxima) {
        PeAtual = PeMaxima;
    }

    atualizarBarra();
}


function atualizarStatusAdjunto() {
    document.getElementById("defPontos").textContent = defesa;
    document.getElementById("iniciativaPontos").textContent = iniciativa;
    document.getElementById("reflexoPontos").textContent = reflexo;
    document.getElementById("coragemPontos").textContent = coragem;
    document.getElementById("percepcaoPontos").textContent = percepcao;
    document.getElementById("precisaoPontos").textContent = precisao;
}


document.getElementById("vigor").addEventListener("input", function () {

    Vigor = Number(this.value);

    atualizarPvMaximo();

    defesa = Math.floor(Vigor / 2);

    atualizarStatusAdjunto();
});

document.getElementById("forca").addEventListener("input", function () {

    forca = Number(this.value);

    atualizarPeMaximo();

    dano = forca;
    atualizarStatusAdjunto();
});
document.getElementById("animo").addEventListener("input", function () {

    animo = Number(this.value);

    atualizarPeMaximo();

    iniciativa = animo ;
    reflexo = Math.floor(animo / 2);

    atualizarStatusAdjunto();
});
document.getElementById("carisma").addEventListener("input", function () {

    carisma = Number(this.value);

    atualizarPeMaximo();

    coragem = Math.floor(carisma / 2);
    atualizarStatusAdjunto();

});
document.getElementById("intelecto").addEventListener("input", function () {

    intelecto = Number(this.value);

    atualizarPeMaximo();

    percepcao = Math.floor(intelecto / 3);
    precisao = Math.floor(intelecto / 2);

    atualizarStatusAdjunto();

});

const fora = document.getElementById("fora");
const vigo = document.getElementById("vigo");
const animoo = document.getElementById("anim");
const carism = document.getElementById("carism");
const intelectoo = document.getElementById("intelect");

fora.addEventListener("click", rollD20for);
vigo.addEventListener("click", rollD20Vig);
animoo.addEventListener("click", rollD20Ani);
carism.addEventListener("click", rollD20Car);
intelectoo.addEventListener("click", rollD20Int)


function rollD20for() {
    const resultado = Math.floor(Math.random() * 20) + 1 + forca;
    alert("Resultado do dado: " + resultado);
}
function rollD20Vig() {
    const resultado = Math.floor(Math.random() * 20) + 1 + Vigor;
    alert("Resultado do dado: " + resultado);
}
function rollD20Ani() {
    const resultado = Math.floor(Math.random() * 20) + 1 + animo;
        alert("Resultado do dado: " + resultado);
} 
function rollD20Car() {
    const resultado = Math.floor(Math.random() * 20) + 1 + carisma;
    alert("Resultado do dado: " + resultado);
}
function rollD20Int() {
    const resultado = Math.floor(Math.random() * 20) + 1 + intelecto;
    alert("Resultado do dado: " + resultado);
}
   




// Inicializa a barra
atualizarBarra();


