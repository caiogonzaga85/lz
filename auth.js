// ===============================
// LOGIN SIMPLES (senha fixa)
// ===============================
function login() {
    const senhaDigitada = document.getElementById("senha").value;

    // 👉 SENHA FIXA
    const senhaCorreta = "lzadmin";

    if (senhaDigitada === senhaCorreta) {
        localStorage.setItem("admin", "logado");
        window.location.href = "painel.html";
    } else {
        document.getElementById("erro").textContent = "Senha incorreta!";
    }
}

// ===============================
// PROTEÇÃO DO PAINEL
// ===============================
if (window.location.pathname.includes("/admin/painel.html")) {
    if (localStorage.getItem("admin") !== "logado") {
        window.location.href = "login.html";
    }
}

// ===============================
// STATUS ABERTA / FECHADA
// ===============================
function carregarStatus() {
    let estado = localStorage.getItem("estadoBarbearia");

    if (!estado) {
        estado = "fechada";
        localStorage.setItem("estadoBarbearia", estado);
    }

    const statusTexto = document.getElementById("statusTexto");
    const btnToggle = document.getElementById("btnToggle");

    if (statusTexto && btnToggle) {
        if (estado === "aberta") {
            statusTexto.textContent = "ABERTA";
            statusTexto.style.color = "lightgreen";
            btnToggle.textContent = "Fechar barbearia";
        } else {
            statusTexto.textContent = "FECHADA";
            statusTexto.style.color = "red";
            btnToggle.textContent = "Abrir barbearia";
        }
    }
}

function toggleStatus() {
    let estado = localStorage.getItem("estadoBarbearia");

    if (estado === "aberta") {
        localStorage.setItem("estadoBarbearia", "fechada");
    } else {
        localStorage.setItem("estadoBarbearia", "aberta");
    }

    carregarStatus();
}

// Carregar status automaticamente no painel
if (window.location.pathname.includes("/admin/painel.html")) {
    carregarStatus();
}

// ===============================
// LOGOUT
// ===============================
function logout() {
    localStorage.removeItem("admin");
    window.location.href = "login.html";
}