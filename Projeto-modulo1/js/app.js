// variaveis coluna esquerda
const fTitulo = document.querySelector ('#ftitle')
const fLinguagem = document.querySelector ('#flinguagem')
const fSelect = document.querySelector ('#selcategoria')
const fDescrisao = document.querySelector ('#fdescrisao')
const fYoutube = document.querySelector ('#fyoutube')
const ulDica = document.querySelector ('#lista-dicas')

//botão
const btnSalvar = document.querySelector ('#btn-salvar')
const btnLimpar = document.querySelector ('#btn-limpar')

// variaveis coluna direita
// const vTotal = document.querySelector ('#total-valor')
// const vFront = document.querySelector ('#front-valor')
// const vBack = document.querySelector ('#back-valor')
// const vFull = document.querySelector ('#full-valor')
// const vSoft = document.querySelector ('#soft-valor')

//campo busca
const buscar = document.querySelector ('#txtbusca')

const form = document.getElementById ('formulario')

form.addEventListener ('submit', (event) => {
    event.preventDefault()

    console.log('Salvou')
})




const listaDicas = [
    {
    titulo: fTitulo.value,
    skill: 'skills',
    categoria: 'categoria',
    descrisao: 'descrisao',
    },

    { 
    titulo: 'titulo',
    skill: 'skills',
    categoria: 'categoria',
    descrisao: 'descrisao',
    },
]


function criarElemento (item) {
    const li = document.createElement('li')
    
    const dTitulo = document.createElement ('h1')
    dTitulo.innerText = item.titulo
    li.appendChild (dTitulo)

    const dSkills = document.createElement ('h3')
    dSkills.innerText = item.skill
    li.appendChild (dSkills)

    const dCategoria = document.createElement ('h3')
    dCategoria.innerText = item.categoria
    li.appendChild (dCategoria)

    const dDescrisao = document.createElement ('p')
    dDescrisao.innerText = item.descrisao
    li.appendChild (dDescrisao)

    return li
}
const li = criarElemento (listaDicas[0])
const li2 = criarElemento (listaDicas[0])
ulDica.appendChild (li)
ulDica.appendChild (li2)

btnSalvar.addEventListener('click', criarElemento)




// function atualizarlista (){
//     recipe.forEach((item) => {
//         const el = createItemElement (item)
//         ulDica.appendChild(el)
//     })
// }