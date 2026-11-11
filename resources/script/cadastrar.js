
import { moradoresParticipando, moradores } from "./moradores.js";
import { validar } from "./validar.js";

export function cadastrarMoradores() {

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let address = document.getElementById("address").value.trim();
    let celular = document.getElementById("celular").value;

    if (!validar(nome, email, password, address, celular)) {
        return;
    }

    let emailExistente = moradores.some((morador) => {
        return morador.email.toLowerCase() === email.toLowerCase();
    });

    if (emailExistente) {
        alert("Este email já está cadastrado!");
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

    localStorage.setItem("moradores", JSON.stringify(moradores));

    localStorage.setItem("moradorLogado", JSON.stringify({
        nome: nome,
        email: email
    }));

    alert("Morador cadastrado com sucesso!");

    window.location.href = "eventos.html";
}
