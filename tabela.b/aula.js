
let indice = 0;
const imagens = document.querySelectorAll(".carrosel img");


function mostrarImagem(tela) {
    imagens.forEach(img => img.classList.remove("ativa"));
    imagens[tela].classList.add("ativa");
}

function proximo() {
    indice = (indice + 1) % imagens.length;
    mostrarImagem(indice);
}

function anterior() {
    indice = (indice - 1 + imagens.length) % imagens.length;
    mostrarImagem(indice);
}

document.querySelector(".botoes button:nth-child(1)")
    .addEventListener("click", anterior)

document.querySelector(".botoes button:nth-child(2)")
    .addEventListener("click", proximo);