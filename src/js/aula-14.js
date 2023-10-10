function exercicioUm() {
    let n1 = parseInt(prompt("Digite um número:"));
    let n2 = parseInt(prompt("Digite um número:"));
    alert("A soma de " + n1 + " com " + n2 + " é: " + (n1 + n2));
}

function exercicioDois() {
    let nome = prompt("Digite seu nome:");
    let sobrenome = prompt("Digite seu sobrenome:");
    alert("Nome completo:\n" + nome + " " + sobrenome);
}

function exercicioTres() {
    let fib = parseInt(prompt("Digite o tamanho da sequência:"));
    var vetor = [];
    for (i = 0; i < fib; i++) {
        if (i == 0 || i == 1) {
            vetor.push(1);
        } else {
            vetor.push(vetor[i - 2] + vetor[i - 1]);
        }
    }
    alert(vetor);
}

function exercicioQuatro() {
    var myFunction = function () {
        var total = [];
        for (i = 0; i < 3; i++) {
            var nota = parseInt(prompt("Digite uma nota: "));
            total.push(nota);
        }
        alert("As notas inseridas foram : " + total[0] + ", " + total[1] + " e " + total[2]);
    }
    myFunction();
}

function desafio() {
    var imprime = function (z) {
        var x = [4, 5, 6, 7, 3, 2, 1];
        alert(x[z]);
    }
    var y = parseInt(prompt("Digite uma posição para imprimir"));
    imprime(y);
}