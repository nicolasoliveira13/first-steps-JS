function exercicioUm() {
    var n1 = parseInt(prompt("Digite um número: "));
    var n2 = parseInt(prompt("Digite um número: "));
    var contador = 0;
    if (n1 > n2) {
        n1 = n2;
    }
    while (contador < 3) {
        n2 = parseInt(prompt("Digite um número: "));
        if (n1 > n2) {
            n1 = n2;
        }
        contador++;
    }
    alert("O menor número é: " + n1);
}

function exercicioDois() {
    var espaco = "";
    var i = 20;
    while (i > 1) {
        espaco += i + " - ";
        i--
    }
    if (i == 1) {
        espaco += i + "";
    }
    alert(espaco);
}

function exercicioTres(){
    var n1 = parseInt(prompt("Digite um número:"));
    var n2 = parseInt(prompt("Digite um número:"));
    for(var i = 0; i < 3; i++){
        n1 += n2;
        n2 = parseInt(prompt("Digite um número:"));
    }
    n1 += n2;
    alert(n1);
}

function desafio(){
    var n = parseInt(prompt("Digite um número:"));
    var espaco = "";
    for(var i = 0; i < 4; i ++){
        espaco += (n - 1) + " - ";
        n = parseInt(prompt("Digite um número:"));
    }
    espaco += (n - 1)
    alert(espaco);
}