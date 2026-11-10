
import { cadastrarMoradores } from "./cadastrar.js";
import { fazerLogin } from "./login.js";

document.getElementById("btnCadastrar")
    .addEventListener("click", cadastrarMoradores);

document.getElementById("btnLogin")
    .addEventListener("click", fazerLogin);
