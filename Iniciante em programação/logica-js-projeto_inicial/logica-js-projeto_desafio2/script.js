//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let dia = prompt('Qual o dia da semana? ');
if(dia.localeCompare('Domingo',undefined,{ sensitivity: 'base' }) === 0 || dia.localeCompare('Sábado',undefined,{ sensitivity: 'base' }) === 0){
    alert('Bom final de semana!');
}
else{
    alert('Boa semana!');
}

//Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numero = prompt('Digite um número:');

if(numero<0){
    alert('Número negativo');
}
else{
    alert('Número positivo');
}

//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let pontos = prompt('Qual a pontuação? ');

if(pontos>=100){
    alert('Parabéns, você venceu!');
}else{
    alert('Tente novamente até você ganhar');
}

//Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldo = prompt('Qual seu saldo:');

alert(`Seu saldo é ${saldo}`);

//Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nome = prompt('Qual seu nome?');

alert(`Seja bem vindo ${nome}!`);