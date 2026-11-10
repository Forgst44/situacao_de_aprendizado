
import { moradores } from "./moradores.js";

export function listarMoradores() {

    if (moradores.length === 0) {
        console.log("Nenhum morador cadastrado!");
        return;
    }

    moradores.forEach((morador, index) => {

        console.log(
            (index + 1) + " - " +
            morador.nome + " | " +
            morador.email + " | " +
            morador.celular + " | " +
            morador.address
        );

    });
}
