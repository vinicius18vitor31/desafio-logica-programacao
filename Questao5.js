// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

const stringParaInverter = "Olá Mundo!";
let stringInvertida = "";

for (let i = stringParaInverter.length; i > 0; i--) {
  stringInvertida += stringParaInverter[i - 1];
}

console.log(stringInvertida);