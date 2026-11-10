
import { moradores } from "./moradores.js";

export function fazerLogin() {

    let email = document.getElementById("emailLogin").value;
    let password = document.getElementById("senhaLogin").value;

    if (email.trim() === "" || password.trim() === "") {
        alert("Preencha todos os campos!");
        return;
    }

    let usuarioEncontrado = moradores.find((morador) => {
        return morador.email === email;
    });

    if (!usuarioEncontrado) {
        alert("Usuário não cadastrado!");
        return;
    }

    if (usuarioEncontrado.password !== password) {
        alert("Senha incorreta!");
        return;
    }

    alert("Login realizado com sucesso!");

    console.log("Usuário logado:");
    console.log("Nome: " + usuarioEncontrado.nome);
    console.log("Email: " + usuarioEncontrado.email);
}
