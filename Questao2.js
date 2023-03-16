// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE:
// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

let fibonacciAnterior = 0; // Valor de fibonacci anterior
let fibonacciNovo = 1; // Valor de fibonacci atual
let isFibonacci = false; // Variável para armazenar se o número é fibonacci
let valorParaVerificar = 21; // Variável com número para ser verificado

while (fibonacciAnterior <= valorParaVerificar) {
  const anterior = fibonacciAnterior;
  const novo = fibonacciNovo;

  if (valorParaVerificar === fibonacciAnterior) {
    isFibonacci = true;
  }

  fibonacciAnterior = novo;
  fibonacciNovo = anterior + novo;
}

if (isFibonacci) {
  console.log(`${valorParaVerificar} é um número fibonacci!`);
} else {
  console.log(`${valorParaVerificar} não é um número fibonacci!`);
}