
import { eventos } from "./eventosDados.js";

let inscricoes = JSON.parse(
    localStorage.getItem("inscricoesEventos")
) || {};

let lista = document.getElementById("listaParticipantes");

eventos.forEach((evento) => {

    let titulo = document.createElement("h2");
    titulo.textContent = evento.nome;

    lista.appendChild(titulo);

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

        li.textContent = participante.nome;

        ul.appendChild(li);

    });

    lista.appendChild(ul);

});
