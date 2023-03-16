// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

const total = 67836.43 + 36678.66 + 29229.88 + 27165.48 + 19849.53;

const porcentagemSP = 100 * 67836.43 / total;
const porcentagemRJ = 100 * 36678.66 / total;
const porcentagemMG = 100 * 29229.88 / total;
const porcentagemES = 100 * 27165.48 / total;
const porcentagemOutos = 100 * 19849.53 / total;

console.log(`SP representa: ${porcentagemSP.toFixed(2)}%`);
console.log(`RJ representa: ${porcentagemRJ.toFixed(2)}%`);
console.log(`MG representa: ${porcentagemMG.toFixed(2)}%`);
console.log(`ES representa: ${porcentagemES.toFixed(2)}%`);
console.log(`Outos representa: ${porcentagemOutos.toFixed(2)}%`);