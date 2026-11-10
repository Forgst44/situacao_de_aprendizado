
import { administrador } from "./administrador.js";

export function fazerLoginAdmin() {

    let email = document.getElementById("emailAdmin").value.trim();
    let senha = document.getElementById("senhaAdmin").value;

    if (email === "" || senha === "") {
        alert("Preencha todos os campos!");
        return;
    }

    if (
        email === administrador.email &&
        senha === administrador.senha
    ) {

        alert("Login administrativo realizado com sucesso!");

        window.location.href = "admin.html";

    } else {

        alert("Email ou senha do administrador incorretos!");

    }

}
