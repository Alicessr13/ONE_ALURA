alert('Boas vindas ao jogo do número secreto');

    let numeroSecreto = 5;

    console.log(numeroSecreto)

    let chute;


while (chute != numeroSecreto) {

    chute = prompt('Escolha um número entre 1 e 10')

    if (numeroSecreto == chute) {
        alert(`Isso ai! Você descobriu o número ${numeroSecreto}`)
    } else {
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}`)
        } else {
            alert(`O número secreto é menor que ${chute}`)
        }
    }
}