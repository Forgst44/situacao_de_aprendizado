
import { cadastrarMoradores } from "./cadastrar.js";
import { fazerLogin } from "./login.js";
import { fazerLoginAdmin } from "./loginAdmin.js";

document.getElementById("btnCadastrar")
    .addEventListener("click", cadastrarMoradores);

document.getElementById("btnLogin")
    .addEventListener("click", fazerLogin);

document.getElementById("btnLoginAdmin")
    .addEventListener("click", fazerLoginAdmin);
