function exercicioUm() {
    let vetor = [1, 2, 3, 4, 5];
    alert("Os valores do vetor definido é: " + vetor);
}

function exercicioDois() {
    var vetor = [1, 2, 3, 4, 5];
    alert("Os valores do vetor definidos são: " + vetor + "\nO terceiro elemento do vetor é: " + vetor[2]);
}

function exercicioTres() {
    var vetor = [1, 2, 3, 4, 5];
    for (i = 0; i < 5; i++) {
        alert("O elemento " + i + " do vetor é: " + vetor[i]);
    }
}

function exercicioQuatro() {
    var vetor = [1, 2, 3, 4, 5];
    var soma = 0
    for (var i = 0; i < 5; i++) {
        soma = soma + vetor[i];
    }
    alert(soma);
}

function exercicioCinco(){
    var vetor = [1, 2, 3, 4, 5];
    vetor[2] = 8;
    alert(vetor);
}

function desafio(){
    var vetor = [1, 2, 3, 4, 5];
    var espaco = "";
    for(i = 0; i < 4; i ++){
        espaco += vetor[i] + " - "
    }
    espaco += vetor[i];
    alert(espaco);
}