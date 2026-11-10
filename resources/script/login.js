
import { moradores } from "./moradores.js";

export function fazerLogin() {

    let email = document.getElementById("emailLogin").value.trim();
    let password = document.getElementById("senhaLogin").value;

    if (email === "" || password === "") {
        alert("Preencha todos os campos!");
        return;
    }

    let usuarioEncontrado = moradores.find((morador) => {
        return morador.email.toLowerCase() === email.toLowerCase();
    });

    if (!usuarioEncontrado) {
        alert("Usuário não cadastrado!");
        return;
    }

    if (usuarioEncontrado.password !== password) {
        alert("Senha incorreta!");
        return;
    }

    localStorage.setItem("moradorLogado", JSON.stringify({
        nome: usuarioEncontrado.nome,
        email: usuarioEncontrado.email
    }));

    alert("Login realizado com sucesso!");

    window.location.href = "eventos.html";
}
