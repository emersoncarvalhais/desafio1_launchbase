/*=================================================================
CRIANDO ARRAYS E OBJETOS
==================================================================*/

const empresas = [
    {
        nome: "Rocketseat",
        cor: "Roxo",
        foco: "programacao",
        endereco: {
            rua: "Rua Guilherme Gembala",
            numero: 260
        }

    }
]

console.log(`A empresa ${empresas[0].nome} está localizada em ${empresas[0].endereco.rua}, ${empresas[0].endereco.numero}`)

const tecnologias = [
    {
        nome: "C++",
        especialidade: "desktop"
    },
    {
        nome: "Python",
        especialidade: "Data Science"
    },
    {
        nome: "Javascript",
        especialidade: "Web/Mobile"
    }
]

const usuario = [
    {
        nome: "Emerson",
        idade: "32 anos",
        especialidade: tecnologias[0]

    }
]

console.log(`O usuário ${usuario[0].nome} tem ${usuario[0].idade} e usa a tecnologia ${tecnologias[0].nome} com especialidade em ${tecnologias[0].especialidade} `)

// exemplos de aula
const programador = {
    nome: "Tati",
    idade: 31,
    tecnologias:  [
        { nome: 'JavaScript', especialidade: 'Desktop' }, 
        { nome: 'JavaScript', especialidade: 'Web/Mobile' }
    ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)
