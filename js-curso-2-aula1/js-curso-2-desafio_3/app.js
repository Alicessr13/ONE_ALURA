// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function imc(altura, peso){
    return peso / (altura * altura);
}

console.log(imc(1.52,50.24).toFixed(2))

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function fatorial(N){
    let resultado = N;
    while(N>1){
        N--;
        resultado = resultado * N;
    }
    return resultado;
}

console.log(fatorial(8))

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function dolarParaReais(dolar){
    return (dolar * 5.66).toFixed(2);
}

console.log(dolarParaReais(5));

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function areaPerimetroRetangulo(altura, largura){
    let area = largura * altura;
    let perimetro = 2*(largura + altura);
    return `A área é ${area} e o perímetro é ${perimetro}`;
}

console.log(areaPerimetroRetangulo(7,11));

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function areaPerimetroCirculo(raio){
    let pi = 3.14
    let perimetro = 2 * pi * raio;
    let area = pi * Math.pow(raio,2)
    return `A área é ${area} e o perímetro é ${perimetro}`;
}

console.log(areaPerimetroCirculo(2))

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(numero){
    let valor = 0;
    while(valor<=10){
        console.log(numero*valor);
        valor++;
    }
}

tabuada(3);