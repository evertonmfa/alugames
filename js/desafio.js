// DESAFIO 1  Função que verifica se uma palavra é um palíndromo

let palavra = prompt(`Informe a palavra ou frase: `);
let validar;
validarPalavra()
function validarPalavra() {
    //validar = palavra;
    validar = palavra.split('').reverse().join('');

    if (palavra == validar) {

        console.log(` A  palavra ${palavra} é  palíndromo`);
        console.log(validar, palavra);

    }
    else {
        console.log(` A  palavra ${palavra} não é  palíndromo`);
        console.log(validar, palavra);
    }

}

// DEAFIO 2 Função para ordenar números em sequência


let numero1 = Number(prompt('informe o primeiro número: '));
let numero2 = Number(prompt('informe o segundo número: '));
let numero3 = Number(prompt('Informe o terceiro número: '));

let menor;
let meio;
let maior;

if (numero1 > numero2 && numero1 > numero3) {

    maior = numero1;
    if (numero2 > numero3) {
        meio = numero2
        menor = numero3

    } else {
        menor = numero2
        meio = numero3

    }


}
else if (numero1 > numero2) {
    menor = numero2;
    meio = numero1;
    maior = numero3;
}
else if (numero1 > numero3) {
    menor = numero3;
    meio = numero1;
    maior = numero2;

}
else {
    if (numero2 > numero3) {
        menor = numero1;
        meio = numero3;
        maior = numero2;

    }
    else{
        menor = numero1;
        meio = numero2;
        maior = numero3;
    }
}

console.log(menor, meio, maior);

