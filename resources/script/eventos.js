
import { eventos } from "./eventosDados.js";


let morador = JSON.parse(
    sessionStorage.getItem("moradorLogado")
);


if (!morador) {

    alert("Você precisa realizar o cadastro primeiro!");

    window.location.href = "index.html";

} else {

    document.getElementById("mensagemMorador").textContent =
        "Olá, " + morador.nome + "! Escolha seu evento.";

}


let inscricoes = JSON.parse(
    sessionStorage.getItem("inscricoesEventos")
) || {};


let botoes = document.querySelectorAll("[data-evento]");

botoes.forEach((botao) => {

    botao.addEventListener("click", () => {

        let idEvento = botao.dataset.evento;

        let eventoEscolhido = eventos.find((evento) => {
            return evento.id == idEvento;
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

        
        sessionStorage.setItem(
            "inscricoesEventos",
            JSON.stringify(inscricoes)
        );

        alert(
            "Você foi inscrito no evento: " +
            eventoEscolhido.nome
        );

        botao.textContent = "Inscrito!";
        botao.disabled = true;

    });

});
