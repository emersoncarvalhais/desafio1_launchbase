/* ==========================================
    sinal > maior 
    sinal < menor 
    sinal >= maior igual
    sinal <= menor igual
    sinal == igual a 
    sinal === igual e do mesmo tipo
    sinal != diferente de 
    sinal !== diferente, inclusive do tipo
==============================================*/

//desafio 1 
const idade = 19
//verificar se a pessoa é maior igual a 18 anos
// se sim,liberar entrada, se não bloquear entrada

if (idade >= 18) {
    console.log("Deixar entrar")
} else {
    console.log("Bloquear entrada")
}

// //se a pessoa tiver 17 anos
// //avisar pra voltar quando tiver 18
if (idade === 17){
    console.log("Volte quando tiver 18 anos")
}

/* ====================================================
&& - "E" as duas condições devem ser verdadeiras 
      para que a condição final seja verdadeira
|| - "OU" Uma das condições deve ser verdadeira 
      para que a condição final seja verdadeira
! - "NAO" Nega uma condição 
========================================================*/

if (!(idade >= 18) || idade === 17) {
    console.log("Bloquear entrada")
} else {
    console.log("Deixar entrar")
}

/*=========================================
    OPERADORES ARITMETICOS
    * Multiplicação 
    / Divisão
    % Resto da Divisão
    + Adição
    - Subtração
===========================================*/


