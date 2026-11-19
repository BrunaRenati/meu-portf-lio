
const formulario = document.getElementById("formContato");

if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        const assunto = encodeURIComponent(
            "Contato pelo portfólio"
        );

        const corpo = encodeURIComponent(
            `Nome: ${nome}\nE-mail: ${email}\n\nMensagem:\n${mensagem}`
        );

        window.location.href =
            `mailto:SEU-EMAIL@EXEMPLO.COM?subject=${assunto}&body=${corpo}`;

    });

}

// MENU MOBILE
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (menuToggle && menu) {
    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("open");

        const aberto = menu.classList.contains("open");

        menuToggle.setAttribute("aria-expanded", aberto);
        menuToggle.textContent = aberto ? "✕" : "☰";
    });
}

// TEMA CLARO E ESCURO
const themeToggle = document.getElementById("theme-toggle");

// Verifica o tema salvo
let tema = localStorage.getItem("tema");

if (tema === "claro") {
    document.body.classList.add("light-theme");
    themeToggle.textContent = "Modo escuro";
} else {
    document.body.classList.remove("light-theme");
    themeToggle.textContent = "Modo claro";
}

// Alterna os temas
themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        localStorage.setItem("tema", "claro");
        themeToggle.textContent = "Modo escuro";
    } else {
        localStorage.setItem("tema", "escuro");
        themeToggle.textContent = "Modo claro";
    }

});
// ANIMAÇÃO DOS ELEMENTOS
const elementos = document.querySelectorAll(
    "section, .project-card, .about-card, .contact-card"
);

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
        }
    });
});

elementos.forEach((elemento) => {
    elemento.classList.add("reveal");
    observador.observe(elemento);
});

// BOTÃO VOLTAR AO TOPO
const botaoTopo = document.getElementById("topo");

if (botaoTopo) {
    window.addEventListener("scroll", function() {
        botaoTopo.style.display =
            window.scrollY > 300 ? "block" : "none";
    });

    botaoTopo.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}