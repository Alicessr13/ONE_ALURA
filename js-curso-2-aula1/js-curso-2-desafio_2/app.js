// Criar uma função que exibe "Olá, mundo!" no console.
function ola(){
    console.log('Ola mundo');
}

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function olaNome(nome){
    console.log(`Olá, ${nome}`)
}
olaNome('Alice')

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobro(num){
    return num * 2;
}
console.log(dobro(3))

// Criar uma função que recebe três números como parâmetros e retorna a média deles.
function media(num1, num2, num3){
    return (num1+num2+num3)/3
}
console.log(media(10,8,9))

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maior(num1,num2){
    if(num1>num2){
        return num1;
    }
    else if(num2>num1){
        return num2
    }else{
        return 'Os numeros são iguais'
    }
}

console.log(maior(4,4))

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function aoquadrado(num){
    return Math.pow(num,2)
}
console.log(aoquadrado(4))
