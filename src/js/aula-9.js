function exercicioUm() {
    for (var i = 20; i > 0; i--) {
        alert(i);
    }
}

function exercicioDois() {
    var nota = parseFloat(prompt("Digite uma nota"));
    while (nota < 0 || nota > 10) {
        alert("A nota que você digitou é inválida");
        nota = parseFloat(prompt("Digite uma nota"));
    }
    if (nota == 10) {
        alert("Você tirou a nota MÁXIMA");
    } else if (nota > 7) {
        alert("Você está APROVADO");
    } else if (nota == 7) {
        alert("Você está na MÉDIA")
    } else {
        alert("Você está REPROVADO")
    }
}

function exercicioTres() {
    var login = prompt("DIgite seu usuário:");
    var senha = prompt("Digite sua senha:");
    while (login != 'teste' && senha != 'teste') {
        alert("Usuário ou senha incorretos");
        login = prompt("DIgite seu usuário:");
        senha = prompt("Digite sua senha:");
    }
    alert("Login Realizado")
}

function desafio() {
    var x = parseInt(prompt("Digite um número: "));
    var y = parseInt(prompt("Digite um número: "));
    if (x < y) {
        x = y;
    }
    for (var i = 0; i < 3; i++) {
        y = parseInt(prompt("Digite um número: "));
        if (x < y) {
            x = y;
        }
    }
    alert("O maior número digitado foi " + x);
}