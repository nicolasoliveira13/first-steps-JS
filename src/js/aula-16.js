function exercicioUm() {
    var maiorNumero = function () {
        var vetor = [];
        var maior = [];
        for (var i = 0; i < 3; i++) {
            vetor.push(parseInt(Math.random() * 100));
        }
        if (vetor[0] > vetor[1] && vetor[1] < vetor[2]) {
            maior.push(vetor[0]);
        } else if ((vetor[0] < vetor[1] && vetor[1] > vetor[2])) {
            maior.push(vetor[1]);
        } else {
            maior.push(vetor[2]);
        }
        return [vetor, maior];
    }
    let [completo, saida] = maiorNumero();
    alert("O vetor completo gerado aleatóriamente foi: " + completo + "\nO maior número dentro desse vetor é: " + saida);
}

function exercicioDois() {
    var inverterString = function (string) {
        var invertida = "";
        for (i = string.length - 1; i >= 0; i--) {
            invertida += string[i];
        }
        return invertida;
    }
    var inverter = prompt("Qual a frase que deseja inverter?");
    var minhaString = inverterString(inverter);
    alert(minhaString);
}

function exercicioTres() {
    var palindromo = function (string) {
        var invertida = "";
        for (i = string.length - 1; i >= 0; i--) {
            invertida += string[i];
        }
        return invertida;
    }
    var verificar = function (string) {
        var invertida = palindromo(string);
        if (string == invertida) {
            return "É um palíndromo";
        } else {
            return "Não é um palíndromo";
        }
    }

    let inverter = prompt("Digite algo:");
    let saida = verificar(inverter);
    alert(saida);
}

function exercicioQuatro() {
    var calcularFatorial = function (fator) {
        var fatorial = 1;
        for (i = 1; i <= fator; i++) {
            fatorial *= i;
        }
        return fatorial;
    }
    let entrada = parseInt(prompt("Sobre qual valor quer saber o fatorial?"));
    let saida = calcularFatorial(entrada);
    alert(saida);
}

function exercicioCinco() {
    var removerElemento = function (entrada) {
        let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        vetor.splice((entrada - 1), 1);
        return vetor;
    }
    let entradaElemento = parseInt(prompt("Qual elemento quer remover?"));
    let saida = removerElemento(entradaElemento);
    alert(saida);
}

function exercicioSeis() {
    var calcularMedia = function (nota4, nota5, nota6) {
        let media = (nota4 + nota5 + nota6) / 3;
        if (media == 7) {
            return "Aprovado na média";
        } else if (media == 10) {
            return "Aprovado com nota máxima"
        } else if (media < 7) {
            return "Reprovado";
        } else {
            return "Aprovado";
        }
    }
    let nota1 = parseInt(prompt("Digite a primeira nota:"));
    let nota2 = parseInt(prompt("Digite a segunda nota:"));
    let nota3 = parseInt(prompt("Digite a terceira nota:"));
    let saidaMedia = calcularMedia(nota1, nota2, nota3);
    alert(saidaMedia);
}

function desafio() {
    var repetirString = function (string1, quant1) {
        var rep = "";
        for (i = 0; i <= quant1; i++) {
            rep += string1 + "\n";
        }
        return rep;
    }
    let string = prompt("Qual string deseja repetir?");
    let quant = parseInt(prompt("Quantas vezes deseja repetir?"));
    let repetida = repetirString(string, quant);
    alert(repetida);
}