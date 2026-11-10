
export function validar(nome, email, password, address, celular) {

    if (nome.trim() === "" || !isNaN(nome)) {
        alert("Nome inválido!");
        return false;
    }

    if (email.trim() === "" || !email.includes("@") || !email.includes(".")) {
        alert("Digite um email válido!");
        return false;
    }

    if (password.length < 8 || password.includes(" ")) {
        alert("Senha inválida! Mínimo de 8 caracteres e sem espaços.");
        return false;
    }

    if (address.trim() === "") {
        alert("Digite um endereço válido!");
        return false;
    }

    if (isNaN(celular) || celular.length < 10 || celular.length > 11) {
        alert("Celular deve conter 10 ou 11 números!");
        return false;
    }

    return true;
}
