// ===============================
// SISTEMA DE NAVEGAÇÃO ENTRE ABAS
// ===============================
function navigate(pageId) {
    // Remove página ativa
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

    // Adiciona a nova página ativa
    const page = document.getElementById(pageId);
    page.classList.add('active');

    // Força cards a animarem novamente
    page.querySelectorAll('.card, .main-card').forEach((el, i) => {
        el.style.animation = "none";
        void el.offsetWidth; // reinicia animação
        el.style.animation = `fadeUp 0.6s ease forwards ${i * 0.08}s`;
    });
}



// ===============================
// SISTEMA "ESTAMOS ABERTOS?"
// ===============================
function verificarStatus() {
    const agora = new Date();
    const hora = agora.getHours();

    // Horário exemplo
    const abre = 9;
    const fecha = 19;

    let status;

    if (hora >= abre && hora < fecha) {
        status = "🟢 Estamos abertos!";
    } else {
        status = "🔴 Fechado no momento.";
    }

    document.getElementById("statusText").textContent = status;
}

verificarStatus();



// ===============================
// MENU HAMBÚRGUER (SLIDE DA DIREITA)
// ===============================
function toggleMenu() {
    const menu = document.getElementById("dropdownMenu");

    // ADICIONA / REMOVE A CLASSE CORRETA
    menu.classList.toggle("open");
}



// ===============================
// FECHAR MENU AO CLICAR EM UMA ABA
// ===============================
document.querySelectorAll(".dropdown-menu button").forEach(btn => {
    btn.addEventListener("click", () => {
        document.getElementById("dropdownMenu").classList.remove("open");
    });
});



// ===============================
// ANIMAÇÃO DE “CLICK” NOS CARDS
// ===============================
document.querySelectorAll(".card, .main-card").forEach(card => {
    card.addEventListener("mousedown", () => {
        card.style.transform = "scale(0.96)";
    });
    card.addEventListener("mouseup", () => {
        card.style.transform = "scale(1)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});



// ===============================
// ANIMAÇÃO DO BOTÃO VOLTAR
// ===============================
document.querySelectorAll(".back-btn").forEach(btn => {
    btn.addEventListener("mousedown", () => {
        btn.style.transform = "scale(0.92)";
        btn.style.opacity = "0.6";
    });
    btn.addEventListener("mouseup", () => {
        btn.style.transform = "scale(1)";
        btn.style.opacity = "1";
    });
    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
        btn.style.opacity = "1";
    });
});



// ===============================
// (Opcional) Reset animações ao abrir o APP
// ===============================
window.onload = () => {
    const home = document.getElementById("ref");
    home.classList.add("active");
};