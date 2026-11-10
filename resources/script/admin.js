
import { eventos } from "./eventosDados.js";

// Recupera as inscrições
let inscricoes = JSON.parse(
    sessionStorage.getItem("inscricoesEventos")
) || {};

// Local onde os participantes serão exibidos
let lista = document.getElementById("listaParticipantes");

// Percorre os três eventos
eventos.forEach((evento) => {

    let titulo = document.createElement("h2");

    titulo.textContent = evento.nome;

    lista.appendChild(titulo);

    // Recupera os participantes daquele evento
    let participantes = inscricoes[evento.id] || [];

    if (participantes.length === 0) {

        let mensagem = document.createElement("p");

        mensagem.textContent = "Nenhum participante inscrito.";

        lista.appendChild(mensagem);

        return;
    }

    let ul = document.createElement("ul");

    participantes.forEach((participante) => {

        let li = document.createElement("li");

        // Mostra somente o nome
        li.textContent = participante.nome;

        ul.appendChild(li);

    });

    lista.appendChild(ul);

});
