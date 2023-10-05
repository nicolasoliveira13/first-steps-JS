function exercicioUm() {
    let n1 = parseInt(prompt("Digite um número:"));
    let n2 = parseInt(prompt("Digite um número:"));

    const soma = n1 + n2;
    const sub = n1 - n2;
    const mult = n1 * n2;
    const div = n1 / n2;
    alert("Os resultados são:\nSoma: " + soma + "\nSubtração: " + sub + "\nMultiplicação: " + mult + "\nDivisão: " + div);
}

function exercicioDois() {
    let n = Math.round(Math.random() * 100);
    alert("O número aletório gerado foi: " + n);
}

function exercicioTres() {
    let escolha = parseInt(prompt("Escolha qual exercicio quer executar: \n1. Exercicio 1 \n2.Exercicio 2 \n3.Exercicio 3 \n4.Exercicio 4 \n5.Exercicio 5 \n6.Exercicio 6 \n7.Desafio"));
    if (escolha == 1) {
        var nome = "Gabriel Macht"
        var idade = "51 anos"
        var sexo = "Masculino"
        var papel = "Harvey Specter"
        console.log("Nome: " + nome + "\nIdade: " + idade + "\nSexo: " + sexo + "\nPapel: " + papel);

        var nome = "Patrick J. Adams"
        var idade = "42 anos"
        var sexo = "Masculino"
        var papel = "Mike Ross"
        console.log("Nome: " + nome + "\nIdade: " + idade + "\nSexo: " + sexo + "\nPapel: " + papel);

        var nome = "Rick Hoffman"
        var idade = "53 anos"
        var sexo = "Masculino"
        var papel = "Louis Litt"
        console.log("Nome: " + nome + "\nIdade: " + idade + "\nSexo: " + sexo + "\nPapel: " + papel);

        var nome = "Maghan Markle"
        var idade = "42 anos"
        var sexo = "Feminino"
        var papel = "Rachel Zane"
        console.log("Nome: " + nome + "\nIdade: " + idade + "\nSexo: " + sexo + "\nPapel: " + papel);

        var nome = "Sarah Rafferty"
        var idade = "50 anos"
        var sexo = "Feminino"
        var papel = "Donna Paulsen"
        console.log("Nome: " + nome + "\nIdade: " + idade + "\nSexo: " + sexo + "\nPapel: " + papel);

    } else if (escolha == 2) {
        let n1 = parseInt(prompt("Digite um numero:"));
        let n2 = parseInt(prompt("Digite um numero:"));
        console.log("A soma de " + n1 + " com " + n2 + " é: " + (n1 + n2));

    } else if (escolha == 3) {
        let escolha = parseInt(prompt("Escolha uma função matemática: \n1. Adição \n2. Subtração \n3. Multiplicação \n4.Divisão"));
        if (escolha == 1) {
            let n1 = parseInt(prompt("Digite um número:"));
            let n2 = parseInt(prompt("Digite um número:"));
            n1 = n1 + n2;
            console.log("O resultado da soma é: " + n1);
        } else if (escolha == 2) {
            let n1 = parseInt(prompt("Digite um número:"));
            let n2 = parseInt(prompt("Digite um número:"));
            n1 = n1 - n2;
            console.log("O resultado da subtração é: " + n1);
        } else if (escolha == 3) {
            let n1 = parseInt(prompt("Digite um número:"));
            let n2 = parseInt(prompt("Digite um número:"));
            n1 = n1 * n2;
            console.log("O resultado da multiplicação é: " + n1);
        } else if (escolha == 4) {
            let n1 = parseInt(prompt("Digite um número:"));
            let n2 = parseInt(prompt("Digite um número:"));
            n1 = n1 / n2;
            alert("O resultado da divisão é: " + n1);
        } else {
            console.log("Escolha inválida")
        }

    } else if (escolha == 4) {
        x = parseInt(prompt("Digite um número para saber seu quadrado: "));
        y = x * x
        console.log("O quadrado de " + x + " é: " + y);

    } else if (escolha == 5) {
        let preco = 50
        let troco = preco - 25
        console.log("Seu produto custou R$ 25,00 " + "\nPara os seus R$ 50,00 preciso lhe dar de troco: R$ " + troco + ",00");
    } else if (escolha == 6) {
        let nome = prompt("Digite seu nome:");
        let sobrenome = prompt("Digite seu sobrenome:");
        console.log("Seja Bem Vindo " + nome + " " + sobrenome);

    } else if (escolha == 7) {
        var n1 = parseInt(prompt("Digite um numero:"));
        var n2 = parseInt(prompt("Digite um numero:"));
        n1 = n1 + n2;
        var n2 = parseInt(prompt("Digite um numero:"));
        n1 = n1 + n2;
        alert("A soma dos números é: " + n1);
    } else {
        console.log("Escolha inválida")
    }
}


function desafio() {
    var n1 = parseInt(prompt("Digite um número:"));
    var n2 = parseInt(prompt("Digite um número:"));
    let temp = n2;
    n2 = n1;
    alert("O primeiro número digitado foi: " + n2);
    alert("O segundo número digitado foi: " + temp);
}