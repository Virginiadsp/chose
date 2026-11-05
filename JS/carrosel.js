
// CARROSSEL

const banners = document.querySelectorAll(".carrosel .banner");
const anterior = document.querySelector(".carrosel .anterior");
const proximo = document.querySelector(".carrosel .proximo");

let indiceAtual = 0;

// MOSTRAR BANNER

function mostrarBanner(indice) {
    banners[indiceAtual].classList.remove("ativo");

    indiceAtual = (indice + banners.length) % banners.length;

    banners[indiceAtual].classList.add("ativo");
}

// PRÓXIMO

function avancarBanner() {
    mostrarBanner(indiceAtual + 1);
}

// ANTERIOR

function voltarBanner() {
    mostrarBanner(indiceAtual - 1);
}

// CLIQUES NAS SETAS

proximo.addEventListener("click", avancarBanner);
anterior.addEventListener("click", voltarBanner);

// TROCA AUTOMÁTICA A CADA 5 SEGUNDOS

setInterval(avancarBanner, 5000);
