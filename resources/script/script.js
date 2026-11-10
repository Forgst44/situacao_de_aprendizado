
import { cadastrarMoradores } from "./cadastrar.js";
import { listarMoradores } from "./listar.js";
import { fazerLogin } from "./login.js";

document.getElementById("btnCadastrar")
    .addEventListener("click", cadastrarMoradores);

document.getElementById("btnListar")
    .addEventListener("click", listarMoradores);

document.getElementById("btnLogin")
    .addEventListener("click", fazerLogin);
