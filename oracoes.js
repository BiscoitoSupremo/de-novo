document.addEventListener("DOMContentLoaded", () => {
    if (document.body.classList.contains("selecao-body")) {
        const jogadores = document.querySelectorAll(".player");

        jogadores.forEach(jogador => {
            jogador.addEventListener("click", () => {
                const id = jogador.getAttribute("onclick").match(/\d+/)[0]; 
                const nome = jogador.querySelector("p").innerText;
                const imagem = jogador.querySelector("img").src;

                localStorage.setItem("jogadorSelecionado", id);
                localStorage.setItem("jogadorNome", nome);
                localStorage.setItem("jogadorImagem", imagem);

                window.location.href = "oracoes.html";
            });
        });
    }

    if (document.body.classList.contains("diario-body")) {
        const playerIcon = document.getElementById("player-icon");
        const diarioTexto = document.getElementById("diario-texto");
        const salvarBtn = document.getElementById("salvar-btn");
        const baixarBtn = document.getElementById("baixar-btn");

        const jogadorImagem = localStorage.getItem("jogadorImagem");
        const jogadorNome = localStorage.getItem("jogadorNome");
        const jogadorId = localStorage.getItem("jogadorSelecionado");

        if (jogadorImagem && playerIcon) {
            playerIcon.src = jogadorImagem;
        }

        const coresJogador = [
            "#a37fa0", "#576e59", "#66BB6A", "#e8d3b0", "#a4bbde", "#f5c0a2"
        ];

        if (jogadorId) {
            document.body.style.backgroundColor = coresJogador[jogadorId - 1];
        }

        salvarBtn.addEventListener("click", () => {
            localStorage.setItem("diarioTexto", diarioTexto.value);
            alert("Diário salvo!");
        });

        diarioTexto.value = localStorage.getItem("diarioTexto") || "";

        baixarBtn.addEventListener("click", () => {
            const texto = diarioTexto.value;
            const blob = new Blob([texto], { type: "text/plain" });
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "meu_diario.txt";
            link.click();
        });
    }
});
