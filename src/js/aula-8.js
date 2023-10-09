function exercicioUm() {
    for (i = 1; i <= 20; i++) {
        alert(i);
    }
}

function exercicioDois() {
    for (i = 0; i < 20; i++) {
        if (i % 2 == 1) {
            alert(i);
        }
    }
}

function exercicioTres() {
    var x = parseInt(prompt("Digite um número:"));
    var y = parseInt(prompt("Digite um número:"));
    for (var i = x + 1; i < y; i++) {
        alert(i);
    }
}

function desafio() {
    var numero = 1;
    var espaco = "";
    while (numero < 20) {
        espaco += numero + " - ";
        numero = numero + 1;
        if (numero == 20) {
            espaco += numero + " ";
        }
    }
    alert(espaco);
}