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
function enviarWpp() {
    // mensagem pronta
    const msg = "Barbearia aberta! 💈";

    // codifica para URL
    const encoded = encodeURIComponent(msg);

    // abre whatsapp
    window.open(`https://wa.me/?text=${encoded}`, "_blank");
}
function copiarEabrir() {
    let estado = localStorage.getItem("estadoBarbearia");

    let msg = "";

    if (estado === "aberta") {
        msg = "Barbearia aberta! 💈";
    } else {
        msg = "Barbearia fechada ✂️";
    }

    // copia para clipboard
    navigator.clipboard.writeText(msg).then(() => {
        document.getElementById("statusCopyMsg").textContent = "Mensagem copiada! Abra o WhatsApp e poste no Status.";
    });

    // abre whatsapp
    window.open("https://wa.me/", "_blank");
}
function abrirInstagram() {
    // abre o instagram no perfil principal
    window.open("https://www.instagram.com/", "_blank");
}
function baixarImagem() {
    const link = document.createElement("a");
    link.href = "../img/designer.png"; 
    link.download = "LZ-Barbearia-Story.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}