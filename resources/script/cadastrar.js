
import { moradoresParticipando, moradores } from "./moradores.js";
import { validar } from "./validar.js";

export function cadastrarMoradores() {

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let address = document.getElementById("address").value;
    let celular = document.getElementById("celular").value;

    if (!validar(nome, email, password, address, celular)) {
        return;
    }

    let novoMorador = new moradoresParticipando(
        nome,
        email,
        password,
        address,
        celular
    );

    moradores.push(novoMorador);

    alert("Morador cadastrado com sucesso!");

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("address").value = "";
    document.getElementById("celular").value = "";
}
