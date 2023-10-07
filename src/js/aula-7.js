function exercicioUm(){
    alert("O preço das maças é de R$ 0.30un. \nComprando mais de 10un, o preço fica R$ 0.20")
    let quant = parseInt(prompt("Quantas maças deseja comprar?"));
    if(quant > 10){
        var preco = quant * 0.20
        alert("Sua conta ficou R$" + preco + " por " + quant + " maças");
    }else{
        preco = quant * 0.30
        alert("Sua conta ficou R$" + preco + " por " + quant + " maças");
    }
}

function exercicioDois(){
    let escolha = parseInt(prompt("Escolha uma opção: \n1.Para saber o maior número. \n2.Para saber se é par ou ímpar. \n3.Para saber se é positivo ou negativo."));
    if(escolha ==1){
        let n1 = parseInt(prompt("Digite um número:"));
        let n2 = parseInt(prompt("Digite um número:"));
        if(n1 > n2){
            alert("Você digitou " + n1 + " e " + n2 + " e o maior deles é " + n1);
        }else{
            alert("Você digitou " + n1 + " e " + n2 + " e o maior deles é " + n2);
        }
    }else if(escolha == 2){
        let n = parseInt(prompt("Digite um número:"));
        if(n%2 == 0){
            alert("O número " + n + " é PAR");
        }else{
            alert("O número " + n + " é ÍMPAR");
        }
    }else if(escolha == 3){
        let n = parseInt(prompt("Digite um número:"));
        if(n > 0){
            alert("O número " + n + " é POSITIVO");
        }else{
            alert("O número " + n + " é NEGATIVO");
        }
    }
}

function desafio(){
    let saque = parseInt(prompt("Digite o valor a ser sacado:"));
    if(saque < 0 || saque > 2000){
        alert("Não é possível sacar esse valor.\nLimite de saque é de R$2000,00");
    }else{
        let nota100 = parseInt(saque / 100);
        saque = saque %100;
        let nota50 = parseInt(saque / 50);
        saque = saque %50;
        let nota20 = parseInt(saque / 20);
        saque = saque %20;
        let nota10 = parseInt(saque / 10);
        saque = saque %10;
        let nota5 = parseInt(saque / 5);
        saque = saque %5;
        let nota2 = parseInt(saque / 2);
        saque = saque %2;
        let nota1 = saque % 2
        alert("Seu saque gerou: \nNotas de 100: " + nota100 + "\nNotas de 50: " + nota50 + "\nNotas de 20: " + nota20 + "\nNotas de 10: " + nota10 + "\nNotas de 5: " + nota5 + "\nNotas de 2: " + nota2 + "\nNotas de 1: " + nota1);
    }
}