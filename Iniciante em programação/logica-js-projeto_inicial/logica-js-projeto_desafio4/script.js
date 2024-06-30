//Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log('Boas vindas');

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome = "Alice"

console.log(`Olá, ${nome}`)

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
alert(`Olá, ${nome}`)

// Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let linguagem = prompt("Qual a linguagem de programação que você mais gosta? ")
console.log(`A linguagem que o usuário mais gosta é ${linguagem}`)

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 5;
let valor2 = 10;
let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`)

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
let valor3 = 15;
let valor4 = 3;
let resultado2 = valor3 - valor4;

console.log(`A diferença de ${valor3} e ${valor4} é igual a ${resultado2}`)
// Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idade = prompt('Qual sua idade?')

let maiorMenor = idade>=18 ? "maior de idade" : "menor de idade";
console.log(`Você é ${maiorMenor}`)

// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numero = prompt("Digite um número:")

if(numero>0){
    alert("Número é positivo");
}else if(numero<0){
    alert("Número é negativo")
}else{
    alert("Número é zero")
}

// Use um loop while para imprimir os números de 1 a 10 no console.
let loop = 1;

while(loop<=10){
    console.log(loop)
    loop++;
}

// Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = prompt('Digite a nota:')

let prova = nota>=7 ? "Aprovado" : "Reprovado"

alert(prova)

// Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
let numRandom = Math.random();

console.log(numRandom)

// Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
let numRandom2 = parseInt(Math.random() * 10 + 1);

console.log(numRandom2)

// Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let numRandom3 = parseInt(Math.random() * 1000 + 1);

console.log(numRandom3)