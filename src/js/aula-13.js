function exercicioUm() {
    var vetor1 = [];
    for(i = 0; i < 2; i ++){
        vetor1.push(parseInt(prompt("Digite um número: ")));
    }
    var vetor2 = [];
    for(i = 1; i >= 0; i --){
        vetor2.push(vetor1[i]);
    }
    alert(vetor2);
}

function exercicioDois(){
    var vetor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var vetor2 = [];
    for(i = vetor.length; i >= 0; i --){
        vetor2.push(vetor[i]);
    }
    alert(vetor2);
}

function exercicioTres(){
    var tam = parseInt(prompt("Digite o tamanho do vetor a ser criado:"));
    var vetor = [];
    for(i = 0; i < tam; i ++){
        vetor.push(parseInt(Math.random() * 100));
    }
    alert("Números aleatórios criados e inseridos no vetor: \n" + vetor);
}

function exercicioQuatro(){
    let n = parseInt(prompt("Você quer saber a tabiada de qual número?"))
    var vetor = [];
    for(i = 1; i <= 10; i ++){
        vetor.push(n * i);
    }
    alert("Vetor completo:\n" + vetor);
}

function desafio(){
    let fib = parseInt(prompt("Quantos número da sequência Fibonacci quer saber?"));
    var vetor = [];
    for(i = 0; i < fib; i ++){
        if(i == 0 || i == 1){
            vetor.push(1);
        }else{
            vetor.push(vetor[i - 2] + vetor[i - 1]);
        }
    }
    alert(vetor);
}