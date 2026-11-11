
import { eventos } from "./eventosDados.js";

function iniciarEventos() {

    let morador = JSON.parse(
        localStorage.getItem("moradorLogado")
    );

    if (!morador) {
        alert("Faça login para acessar os eventos!");
        window.location.href = "index.html";
        return;
    }

    document.getElementById("mensagemMorador").textContent =
        "Olá, " + morador.nome + "! Escolha seu evento.";

    let inscricoes = JSON.parse(
        localStorage.getItem("inscricoesEventos")
    ) || {};

    let botoes = document.querySelectorAll("[data-evento]");

    botoes.forEach((botao) => {

        let idEvento = botao.dataset.evento;

        let jaInscrito = (inscricoes[idEvento] || []).some((participante) => {
            return participante.email === morador.email;
        });

        if (jaInscrito) {
            botao.textContent = "Inscrito!";
            botao.disabled = true;
        }

        botao.addEventListener("click", () => {

            let eventoEscolhido = eventos.find((evento) => {
                return evento.id === Number(idEvento);
            });

            if (!eventoEscolhido) {
                alert("Evento não encontrado!");
                return;
            }

            if (!inscricoes[idEvento]) {
                inscricoes[idEvento] = [];
            }

            let jaInscrito = inscricoes[idEvento].some((participante) => {
                return participante.email === morador.email;
            });

            if (jaInscrito) {
                alert("Você já está inscrito neste evento!");
                return;
            }

            inscricoes[idEvento].push({
                nome: morador.nome,
                email: morador.email
            });

            localStorage.setItem(
                "inscricoesEventos",
                JSON.stringify(inscricoes)
            );

            alert("Inscrição realizada em: " + eventoEscolhido.nome);

            botao.textContent = "Inscrito!";
            botao.disabled = true;

        });

    });
}

iniciarEventos();
