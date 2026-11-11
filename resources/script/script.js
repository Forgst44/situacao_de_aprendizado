
import { cadastrarMoradores } from "./cadastrar.js";
import { fazerLogin } from "./login.js";
import { fazerLoginAdmin } from "./loginAdmin.js";

// Cadastro
document.getElementById("formCadastro")
    .addEventListener("submit", (event) => {
        event.preventDefault();
        cadastrarMoradores();
    });

// Login do morador
document.getElementById("formLogin")
    .addEventListener("submit", (event) => {
        event.preventDefault();
        fazerLogin();
    });

// Login do administrador
document.getElementById("formLoginAdmin")
    .addEventListener("submit", (event) => {
        event.preventDefault();
        fazerLoginAdmin();
    });
