// Seções surgem suavemente ao rolar a página
const secoes = document.querySelectorAll(".Surgir");
if ("IntersectionObserver" in window) {
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visivel");
                observador.unobserve(entrada.target);
            }
        });
    }, { threshold: 0.15 });
    secoes.forEach((secao) => observador.observe(secao));
} else {
    secoes.forEach((secao) => secao.classList.add("visivel"));
}

// Galeria: clicar na miniatura abre a imagem em tela cheia
const lupa = document.querySelector(".Lupa");
if (lupa) {
    const imagemLupa = lupa.querySelector("img");
    document.querySelectorAll(".Galeria button").forEach((botao) => {
        botao.addEventListener("click", () => {
            const miniatura = botao.querySelector("img");
            imagemLupa.src = miniatura.src;
            imagemLupa.alt = miniatura.alt;
            lupa.classList.add("aberta");
        });
    });
    const fechar = () => lupa.classList.remove("aberta");
    lupa.addEventListener("click", fechar);
    document.addEventListener("keydown", (evento) => {
        if (evento.key === "Escape") fechar();
    });
}
