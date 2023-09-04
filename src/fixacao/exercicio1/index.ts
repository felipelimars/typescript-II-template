/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/

enum CORES {
  AZUL = "azul",
  ROSA = "rosa",
  LARANJA = "laranja"
}

type Tuser = {
  nome: string,
  idade: number,
  corFavorita: CORES,
}

const user1: Tuser = {
  nome: "Rodrigo",
  idade: 28,
  corFavorita: CORES.LARANJA
}
const user2: Tuser = {
  nome: "Felipe",
  idade: 27,
  corFavorita: CORES.AZUL
}
const user3: Tuser = {
  nome: "Juliana",
  idade: 24,
  corFavorita: CORES.ROSA
}

