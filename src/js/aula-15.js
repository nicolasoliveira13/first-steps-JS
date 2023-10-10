function exercicioUm() {
    var soma = function (n3, n4) {
        var sum = n3 + n4;
        return sum;
    }
    let n1 = parseInt(prompt("Digite um número"));
    let n2 = parseInt(prompt("Digite um número"));
    var resultado = soma(n1, n2);
    alert("A soma entre " + n1 + " e " + n2 + " é: " + resultado)
}

function exercicioDois() {
    var busca = function (x, y) {
        return x[y - 1];
    }
    let vetor = [1, 2, 3, 4, 5, 6, 7];
    let n = parseInt(prompt("Qual item deseja receber?"));
    var resultado = busca(vetor, n);
    alert("O " + n + "º elemento do vetor é: " + resultado);
}

function exercicioTres() {
    let sum = function (n3, n4) {
        return n3 + n4;
    }

    let sub = function (n3, n4) {
        return n3 - n4;
    }

    let mult = function (n3, n4) {
        return n3 * n4;
    }

    let div = function (n3, n4) {
        return n3 / n4;
    }

    let menu = parseInt(prompt("Escolha uma operação:\n1. Soma\n2. Subtração\n3. Multiplicação\n4. Divisão"));
    if (menu != 1 && menu != 2 && menu != 3 && menu != 4) {
        alert("Escolha inválida")
    } else {
        let n1 = parseInt(prompt("Digite um número:"));
        let n2 = parseInt(prompt("Digite um número:"));
        if (menu == 1) {
            var result = sum(n1, n2);
            alert(result);
        } else if (menu == 2) {
            result = sub(n1, n2);
            alert(result);
        } else if (menu == 3) {
            result = mult(n1, n2);
            alert(result);
        } else if (menu == 4) {
            result = div(n1, n2);
            alert(result);
        }
    }
}

function desafio() {
    var funcao = function () {
        var escolha = parseInt(prompt("Digite um numero:"));
        var vetor = [];
        for (i = 0; i < escolha; i++) {
            vetor.push(parseInt(Math.random() * 10));
        }
        return vetor;
    }
    var resultado = [];
    var saida = funcao();
    resultado.push(saida);
    saida = funcao();
    resultado.push(saida);
    alert(resultado);
}