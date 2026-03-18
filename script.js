// ===============================
// SISTEMA DE NAVEGAÇÃO ENTRE ABAS
// ===============================
function navigate(pageId) {

    // Remove página ativa
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

    // Ativa nova página
    const page = document.getElementById(pageId);
    if (!page) return;
    page.classList.add('active');

    // Reanima os cards
    page.querySelectorAll('.card, .main-card').forEach((el, i) => {
        el.style.animation = "none";
        void el.offsetWidth;
        el.style.animation = `fadeUp 0.6s ease forwards ${i * 0.08}s`;
    });

    // Atualiza o menu
    updateMenuStyles(pageId);
}



// ===============================
// SISTEMA "ESTAMOS ABERTOS?"
// ===============================
function verificarStatus() {
    const agora = new Date();
    const hora = agora.getHours();

    const abre = 9;
    const fecha = 19;

    let status = (hora >= abre && hora < fecha)
        ? "🟢 Estamos abertos!"
        : "🔴 Fechado no momento.";

    const el = document.getElementById("statusText");
    if (el) el.textContent = status;
}
verificarStatus();



// ===============================
// MENU HAMBÚRGUER (SLIDE)
// ===============================
function toggleMenu() {
    const menu = document.getElementById("dropdownMenu");
    menu.classList.toggle("open");
}



// ===============================
// FECHAR MENU AO CLICAR EM UMA ABA
// ===============================
document.querySelectorAll(".menu-item").forEach(btn => {
    btn.addEventListener("click", () => {
        document.getElementById("dropdownMenu").classList.remove("open");
    });
});



// ===============================
// ANIMAÇÃO DE CLICK NOS CARDS
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
// BOTÃO VOLTAR (efeito click)
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
// ZEBRA + ITEM ATIVO NO MENU
// ===============================
function updateMenuStyles(activePage) {
    const items = document.querySelectorAll(".menu-item");

    items.forEach((item, index) => {

        const page = item.dataset.page;

        // zebra
        if (index % 2 === 0) {
            item.style.background = "#000";
            item.style.color = "#fff";
        } else {
            item.style.background = "#fff";
            item.style.color = "#000";
        }

        // aba ativa
        if (page === activePage) {
            item.style.borderLeft = "5px solid #4f8cff";
            item.style.fontWeight = "bold";
            item.style.transform = "translateX(5px)";
        } else {
            item.style.borderLeft = "5px solid transparent";
            item.style.fontWeight = "normal";
            item.style.transform = "translateX(0)";
        }
    });
}



// ===============================
// CARREGAR PÁGINA INICIAL
// ===============================
window.onload = () => {
    navigate("ref");
};



// ===============================
// BOTÃO INSTALAR APP (PWA)
// ===============================
let deferredPrompt;
const installButton = document.getElementById("installButton");

window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;
    installButton.style.display = "block";
});

installButton.addEventListener("click", async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const result = await deferredPrompt.userChoice;

    deferredPrompt = null;
    installButton.style.display = "none";
});

// esconder quando já instalado
window.addEventListener("appinstalled", () => {
    installButton.style.display = "none";
});