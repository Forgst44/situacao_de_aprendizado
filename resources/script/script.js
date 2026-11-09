
class moradoresParticipando {
    constructor(nome, email, password, address, celular) {
        this.nome = nome;
        this.email = email;
        this.password = password;
        this.address = address;
        this.celular = celular;
    }
}

let moradores = [];

function validar(nome, email, password, address, celular) {

    if (nome.trim() === "" || !isNaN(nome)) {
        alert("Nome inválido! Digite seu nome usando letras.");
        return false;
    }

    if (email.trim() === "" || !email.includes("@") || !email.includes(".")) {
        alert("Digite um email válido!");
        return false;
    }

    if (password.length < 8) {
        alert("A senha deve ter pelo menos 8 caracteres!");
        return false;
    }

    if (password.includes(" ")) {
        alert("A senha não pode conter espaços!");
        return false;
    }

    if (address.trim() === "") {
        alert("Digite um endereço válido!");
        return false;
    }

    if (isNaN(celular) || celular.length < 10 || celular.length > 11) {
        alert("O celular deve conter 10 ou 11 números!");
        return false;
    }

    return true;
}

function cadastrarMoradores() {

    let nome = prompt("Digite seu nome");
    let email = prompt("Digite seu email");
    let password = prompt("Digite sua senha");
    let address = prompt("Digite seu endereço");
    let celular = prompt("Digite seu número de celular");

    if (!validar(nome, email, password, address, celular)) {
    alert("Cadastro inválido! O sistema será encerrado.");
    opcao = "3";
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
}

function listarMoradores() {

    if (moradores.length === 0) {
        alert("Nenhum morador cadastrado!");
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

let opcao = "";

while (opcao !== "3") {

    opcao = prompt(
        "1 - Cadastrar morador\n" +
        "2 - Listar moradores\n" +
        "3 - Sair"
    );

    if (opcao === "1") {
        cadastrarMoradores();
    }

    else if (opcao === "2") {
        listarMoradores();
    }

    else if (opcao === "3") {
        alert("Sistema encerrado!");
    }

    else {
        alert("Opção inválida!");
    }
}



