function exercicioUm() {
    let letra = prompt("Digite uma letra:");
    if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
        alert("A letra informada é uma VOGAL");
    } else {
        alert("A letra informada é uma CONSOANTE");
    }
}

function exercicioDois() {
    let n1 = parseInt(prompt("Digite um número:"));
    let n2 = parseInt(prompt("Digite um número:"));
    let n3 = parseInt(prompt("Digite um número:"));
    if (n1 > n2 && n2 > n3) {
        alert("Números digitados: " + (n1) + ", " + (n2) + ", " + (n3) + "\nO número " + (n1) + " é o maior");
    } else if (n1 < n2 && n2 < n3) {
        alert("Números digitados: " + (n1) + ", " + (n2) + ", " + (n3) + "\nO número " + (n3) + " é o maior");
    } else {
        alert("Números digitados: " + (n1) + ", " + (n2) + ", " + (n3) + "\nO número " + (n2) + " é o maior");
    }
}

function exercicioTres() {
    let n1 = parseInt(prompt("Digite um número:"));
    let n2 = parseInt(prompt("Digite um número:"));
    let n3 = parseInt(prompt("Digite um número:"));
    if (n1 > n2 && n2 > n3) {
        alert("Números digitados: " + n1 + ", " + n2 + ", " + n3 + "\nO número " + n1 + " é o maior e o número " + n3 + " é o menor");
    } else if (n1 < n2 && n2 < n3) {
        alert("Números digitados: " + n1 + ", " + n2 + ", " + n3 + "\nO número " + n3 + " é o maior e o número " + n1 + " é o menor");
    } else if (n1 < n2 && n2 > n3 && n1 > n3) {
        alert("Números digitados: " + n1 + ", " + n2 + ", " + n3 + "\nO número " + n2 + " é o maior e o número " + n3 + " é o menor")
    } else {
        alert("Números digitados: " + n1 + ", " + n2 + ", " + n3 + "\nO número " + n2 + " é o maior e o número " + n1 + " é o menor");
    }
}

function exercicioQuatro() {
    let mes = parseInt(prompt("Digite um número:"));
    if (mes == 1) {
        alert("O número " + mes + " representa Janeiro");
    } else if (mes == 2) {
        alert("O número " + mes + " representa Fevereiro");
    } else if (mes == 3) {
        alert("O número " + mes + " representa Março");
    } else if (mes == 4) {
        alert("O número " + mes + " representa Abril");
    } else if (mes == 5) {
        alert("O número " + mes + " representa Maio");
    } else if (mes == 6) {
        alert("O número " + mes + " representa Junho");
    } else if (mes == 7) {
        alert("O número " + mes + " representa Julho");
    } else if (mes == 8) {
        alert("O número " + mes + " representa Agosto");
    } else if (mes == 9) {
        alert("O número " + mes + " representa Setembro");
    } else if (mes == 10) {
        alert("O número " + mes + " representa Outubro");
    } else if (mes == 11) {
        alert("O número " + mes + " representa Novembro");
    } else if (mes == 12) {
        alert("O número " + mes + " representa Dezembro");
    } else {
        alert("O número digitado não representa nenhum mês")
    }
}

function desafio() {
    var n1 = parseInt(prompt("Digite um número:"));
    var n2 = parseInt(prompt("Digite um número:"));
    if (n1 > n2) {
        var n2 = parseInt(prompt("Digite um número:"));
        if (n1 > n2) {
            alert("O número " + n1 + " é o maior");
        } else {
            alert("O número " + n2 + " é o maior");
        }
    } else {
        var n1 = parseInt(prompt("Digite um número:"));
        if (n1 > n2) {
            alert("O número " + n1 + " é o maior");
        } else {
            alert("O número " + n2 + " é o maior");
        }
    }
}
