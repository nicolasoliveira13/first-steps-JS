function exercicioUm() {
    let n = parseInt(prompt("Informe o número"));
    if (n > 0) {
        alert("O número " + n + " é POSITIVO");
    } else {
        alert("O número " + n + " é NEGATIVO");
    }
}

function exercicioDois() {
    let idade = parseInt(prompt("Qual a sua idade?"));
    if (idade > 16) {
        alert("Você já pode votar.");
    } else {
        alert("Você ainda não pode votar, espere mais " + (16 - idade) + " anos, para votar");
    }
}

function exercicioTres() {
    let nota = parseInt(prompt("Qual a nota?"));
    if (nota > 7) {
        alert("Você está APROVADO");
    } else {
        alert("VocÊ está REPROVADO")
    }
}

function desafio() {
    let nota1 = parseInt(prompt("Digite a primeira nota:"));
    let nota2 = parseInt(prompt("Digite a segunda nota:"));
    let nota3 = parseInt(prompt("Digite a terceira nota:"));
    let media = ((nota1 + nota2 + nota3) / 3);
    if (media >= 7) {
        alert("Sua média foi " + media + " e você está APROVADO");
    } else {
        alert("Sua média foi " + media + " e você está REPROVADO")
    }
}