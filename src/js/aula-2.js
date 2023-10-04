function exercicioUm() {
    var nome = "Gabriel Macht"
    var idade = "51 anos"
    var sexo = "Masculino"
    var papel = "Harvey Specter"
    alert("Nome: " + nome + "\nIdade: " + idade + "\nSexo: " + sexo + "\nPapel: " + papel);

    var nome = "Patrick J. Adams"
    var idade = "42 anos"
    var sexo = "Masculino"
    var papel = "Mike Ross"
    alert("Nome: " + nome + "\nIdade: " + idade + "\nSexo: " + sexo + "\nPapel: " + papel);

    var nome = "Rick Hoffman"
    var idade = "53 anos"
    var sexo = "Masculino"
    var papel = "Louis Litt"
    alert("Nome: " + nome + "\nIdade: " + idade + "\nSexo: " + sexo + "\nPapel: " + papel);

    var nome = "Maghan Markle"
    var idade = "42 anos"
    var sexo = "Feminino"
    var papel = "Rachel Zane"
    alert("Nome: " + nome + "\nIdade: " + idade + "\nSexo: " + sexo + "\nPapel: " + papel);

    var nome = "Sarah Rafferty"
    var idade = "50 anos"
    var sexo = "Feminino"
    var papel = "Donna Paulsen"
    alert("Nome: " + nome + "\nIdade: " + idade + "\nSexo: " + sexo + "\nPapel: " + papel);
}

function exercicioDois() {
    let n1 = parseInt(prompt("Digite um numero:"));
    let n2 = parseInt(prompt("Digite um numero:"));
    alert("A soma de " + n1 + " com " + n2 + " é: " + (n1 + n2));
}

function exercicioTres() {
    let escolha = parseInt(prompt("Escolha uma função matemática: \n1. Adição \n2. Subtração \n3. Multiplicação \n4.Divisão"));
    if (escolha == 1) {
        let n1 = parseInt(prompt("Digite um número:"));
        let n2 = parseInt(prompt("Digite um número:"));
        n1 = n1 + n2;
        alert("O resultado da soma é: " + n1);
    } else if (escolha == 2) {
        let n1 = parseInt(prompt("Digite um número:"));
        let n2 = parseInt(prompt("Digite um número:"));
        n1 = n1 - n2;
        alert("O resultado da subtração é: " + n1);
    } else if (escolha == 3) {
        let n1 = parseInt(prompt("Digite um número:"));
        let n2 = parseInt(prompt("Digite um número:"));
        n1 = n1 * n2;
        alert("O resultado da multiplicação é: " + n1);
    } else if (escolha == 4) {
        let n1 = parseInt(prompt("Digite um número:"));
        let n2 = parseInt(prompt("Digite um número:"));
        n1 = n1 / n2;
        alert("O resultado da divisão é: " + n1);
    } else {
        alert("Escolha inválida")
    }
}

function exercicioQuatro() {
    x = parseInt(prompt("Digite um número para saber seu quadrado: "));
    y = x * x
    alert("O quadrado de " + x + " é: " + y);
}

function exercicioCinco() {
    let preco = 50
    let troco = preco - 25
    alert("Seu produto custou R$ 25,00 " + "\nPara os seus R$ 50,00 preciso lhe dar de troco: R$ " + troco + ",00");
}

function exercicioSeis() {
    let nome = prompt("Digite seu nome:");
    let sobrenome = prompt("Digite seu sobrenome:");
    alert("Seja Bem Vindo " + nome + " " + sobrenome);
}

function desafio() {
    var n1 = parseInt(prompt("Digite um numero:"));
    var n2 = parseInt(prompt("Digite um numero:"));
    n1  = n1 + n2;
    var n2 = parseInt(prompt("Digite um numero:"));
    n1 = n1 + n2;
    alert("A soma dos números é: " + n1);
}