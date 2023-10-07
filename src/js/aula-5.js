function exercicioUm() {
    var n = parseInt(prompt("Qual o número?"));
    if (n == 0) {
        alert("Seu número é ZERO");
    } else if (n > 0) {
        alert("Seu número é POSITIVO");
    } else {
        alert("Seu número é NEGATIVO");
    }
}

function exercicioDois() {
    let nota1 = parseInt(prompt("Qual a primeira nota?"));
    let nota2 = parseInt(prompt("Qual a segunda nota?"));
    let nota3 = parseInt(prompt("Qual a terceira nota?"));
    media = ((nota1 + nota2 + nota3) / 3);
    if (media == 7) {
        alert("Você está na MÉDIA");
    } else if (media < 7) {
        alert("Você está REPROVADO");
    } else {
        alert("Você estpa APROVADO");
    }
}

function exercicioTres() {
    let login = prompt("Qual seu usuário?")
    let senha = prompt("Qual a senha?");
    if (login == 'teste' && senha == 'teste') {
        alert("Login realizado");
    } else {
        alert("Login ou senha incorretos");
    }
}

function exercicioQuatro() {
    let n = parseInt(prompt("Digite o número:"));
    if (n % 2 == 0) {
        alert("Seu número é PAR");
    } else {
        alert("Seu número é ÍMPAR")
    }
}

function desafio() {
    let login = prompt("Qual seu usuário?")
    let senha = prompt("Qual a senha?");
    if (login == 'teste' && senha == 'teste') {
        alert("Login realizado");
    } else if (login == 'teste' && senha != 'teste') {
        alert("Senha incorreta");
    } else {
        alert("Login ou senha incorretos");
    }
}