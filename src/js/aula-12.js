function exercicioUm(){
    let vetor = [];
    for(i = 0; i < 4; i ++){
        vetor.push(prompt("Digite um número"));
    }
    alert(vetor)
}

function exercicioDois(){
    var vetor = [];
    for(i = 0; i < 4; i ++){
        vetor.push(prompt("Digite um número:"));
    }
    alert("Vetor completo: " + vetor);
    for(i = 0; i < 4; i ++){
        alert(vetor[i]);
    }
}

function exercicioTres(){
    var vetor = [6, 7, 8, 9, 10];
    alert(vetor);
}

function exercicioQuatro(){
    var vetor1 = [];
    for(var i = 0; i < 4; i ++){
        vetor1.push(prompt("Digite um número:"));
    }
    alert("Primeiro vetor completo: " + vetor1);

    var vetor2 = [];
    for(var i = 6; i <= 10; i ++){
        vetor2.push(i);
    }
    alert("Segundo vetor completo: " + vetor2);

    var vetor3 = [];
    for(var i = 0; i < vetor1.length; i ++){
        vetor3.push(vetor1[i]);
    }
    alert("Primeira entrada no terceiro vetor: " + vetor3);

    for(i = 0; i < vetor2.length; i ++){
        vetor3.push(vetor2[i]);
    }
    alert("Terceiro vetor completo: " + vetor3);
}

function desafio(){
    let vetor = "Essa string é um vetor";
    alert("Conteúdo do vetor: " + vetor);
    for(i = 0; i < vetor.length; i ++){
        alert(vetor[i]);
    }
}