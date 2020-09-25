<h1 align = "center">
    <img src = "https://camo.githubusercontent.com/268b1344409fac98c4eeda520482b6910c4ddcba/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f676f6c64656e2d77696e642f626f6f7463616d702d6c61756e6368626173652f6c6f676f2e706e67">
</h1>


# Desafio 1-1 a 1-4
## Índice
- [Desafio 1-1](#-Sobre-o-desafio-1-1); 
- [Desafio 1-2](#-Sobre-o-desafio-1-2);
- [Desafio 1-3](#-Sobre-o-desafio-1-3);
- [Desafio 1-4](#-Sobre-o-desafio-1-4).

---

## Sobre o desafio 1-1
Desafios para fortalecer alguns conceitos como:
- Variáveis;
- Condicionais;
- Operadores.

### **Cálculo de IMC**
Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

### **Cálculo de aposentadoria**
Crie um programa para calcular a aposentadoria de uma pessoa. Comece criando constantes para armazenar nome, sexo, idade e contribuicao(em anos)

---

## Sobre o desafio 1-2
Desafios para fortalecer alguns conceitos, entre eles:

- Objetos;
- Vetores.

### Construção e impressão de objetos
Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. Os dados a serem armazenados são:

- Nome: Rocketseat;
- Cor: Roxo;
- Foco: Programação;
- Endereço:
Rua: Rua Guilherme Gembala
Número: 260.

### Vetores e objetos
Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

As tecnologias também devem ser objetos contendo nome e especialidade.

---

## Sobre o desafio 1-3
Desafios para fortalecer conceitos como:

- Funções e métodos;
- Estruturas de repetição;
- Escopos.

### Usuários e tecnologias

Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array).

Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários.

### Busca por tecnologia
Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false.

Percorra o array de usuários e, para cada um, verifique se o mesmo trabalha com CSS utilizando a função construída acima, se SIM, imprima em tela as informações do usuário.

### Soma de despesas e receitas

Crie um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo (receitas - despesas).

Percorra o array de usuários e para cada usuário chame uma função chamada calculaSaldo que recebe como parâmetro as receitas e despesas do usuário.

Utilize a função somaNumeros.

## Sobre o desafio 1-4
Desafios para fortalecer alguns conceitos, entre eles:

- Booleanos;
- Organização;
- Padronização;
- Escrita.

### Introdução
Crie um programa para realizar operações bancárias na conta de um usuário.

Comece criando um objeto com o nome do usuário, suas transações e saldo.

As transações (transactions) devem iniciar como um array vazio [] e o saldo (balance) em 0 (zero).

### Adicionar transações
Crie uma função **createTransaction** para adicionar uma nova transação no array de transações de um usuário, essa função deve receber como parâmetro um objeto de transação

Dica: Você pode usar o método **user.transactions.push(transaction)** para adicionar um novo item no array de transações.

### Relatórios
Crie uma função chamada **getHigherTransactionByType** que recebe como parâmetro o tipo de transação credit/debit, percorre as transações do usuário e retorna o objeto da transação de maior valor com aquele tipo.

Crie uma função chamada **getAverageTransactionValue** que retorna o valor médio das transações de um usuário independente do seu tipo.

Crie uma função chamada **getTransactionsCount** que retorna o número de transações de cada tipo credit/debit, o retorno da função deve ser um objeto e seguir exatamente como o modelo apresentado abaixo:

``` 
getTransactionsCount(); // { credit: 5, debit: 3 } 
```
---
Desenvolvido por Emerson Carvalhais
