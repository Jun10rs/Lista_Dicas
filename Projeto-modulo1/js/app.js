// variaveis coluna esquerda
const fTitulo = document.querySelector ('#ftitle')
const fLinguagem = document.querySelector ('#flinguagem')
const fCategoria = document.querySelector ('#fcategoria')
const fDescrisao = document.querySelector ('#fdescrisao')
const fYoutube = document.querySelector ('#fyoutube')
const ulDica = document.querySelector ('#lista-dicas')

//botão
const btnSalvar = document.querySelector ('#btn-salvar')
const btnLimpar = document.querySelector ('#btn-limpar')

// variaveis coluna direita
const vTotal = document.querySelector ('#total-valor')
const vFront = document.querySelector ('#front-valor')
const vBack = document.querySelector ('#back-valor')
const vFull = document.querySelector ('#full-valor')
const vSoft = document.querySelector ('#soft-valor')

//campo busca
const buscar = document.querySelector ('#txtbusca')
const btnBusca = document.getElementById ('btn-busca')
const btnLimpaB= document.getElementById ('btn-limparb')

const form = document.getElementById ('formulario')

let listaItem = []

let edicao = false

//FUNÇÃO PARA REMOVER AS DICAS
function removeCard (itemRemovido) {
    listaItem = listaItem.filter ((item) => item !== itemRemovido)
    console.log (listaItem)
    attLista()
}
  
//FUNÇÃO PARA CRIAR DICAS NOVAS
function criarDicas (){
       
    const novoItem = {
        titulo: fTitulo.value,
        skill: fLinguagem.value,
        categoria: fCategoria.value,
        descrisao: fDescrisao.value,
    }
    alert ('Dica cadastrada com sucesso!!!')
    
    listaItem.push(novoItem)
    attLista()
    salvarJson()
}

//FUNÇÃO PARA EDITAR AS DICAS
function editarCard (itemEdicao){
    const { titulo, skill, categoria, descrisao} = itemEdicao
    fTitulo.value = titulo
    fLinguagem.value = skill
    fCategoria.value = categoria
    fDescrisao.value = descrisao
    
    console.log (titulo)
    
    
   
}

// BLOCO DE FUNÇÃO PARA CRIAR OS ELEMENTOS DAS DICAS
function criarElemento (item) {
    
    const liList = document.createElement('li')
    
    const dTitulo = document.createElement ('h2')
    dTitulo.innerText = item.titulo
    liList.appendChild (dTitulo)

    const dSkills = document.createElement ('p')
    dSkills.innerHTML = `<strong>Linguagem: </strong> ${item.skill}`
    liList.appendChild (dSkills)

    const dCategoria = document.createElement ('p')
    dCategoria.innerHTML = `<strong>Categoria:</strong> ${item.categoria}`
    liList.appendChild (dCategoria)

    const dDescrisao = document.createElement ('p')
    dDescrisao.innerText = item.descrisao
    liList.appendChild (dDescrisao)

    const btnDel = document.createElement ('button')
    btnDel.innerText = '🗑️' 
    btnDel.addEventListener ('click', () => {(
        console.log ('remove', item))
        

    const resultado = confirm ('Deseja realmente excluir esse Card?')
    if (resultado == true) {
        removeCard (item)
        salvarJson()
    } else {
        alert ('Opção cancelada')
    }
    })
    liList.appendChild (btnDel)

    const btnEdit = document.createElement ('button')
    btnEdit.innerText = '📝' 

    btnEdit.addEventListener ('click', editarCard)
    console.log ('edita',item)
    // editarCard(item)

    liList.appendChild (btnEdit)
    
    return liList
}

//FUNÇÃO CONTADOR DOS CARDS
function contadorCard (){
     const totalFront = listaItem.reduce((acc, item) => {
        if (item.categoria === 'FrontEnd') {
            return acc + 1
        }else {
            return acc
        }
    },0)

    const totalBack = listaItem.reduce((acc, item) => {
        if (item.categoria === 'BackEnd') {
            return acc + 1  
        }else {
            return acc
        }
    },0)

    const totalFull = listaItem.reduce((acc, item) => {
        if (item.categoria === 'FullStack') {
            return acc + 1  
        }else {
            return acc
        }
    },0)

    const totalSoft = listaItem.reduce((acc, item) => {
        if (item.categoria === 'Comportamental/Soft') {
            return acc + 1    
        }else {
            return acc
        }
    },0)
    
vFront.innerText = totalFront
vBack.innerText = totalBack
vFull.innerText = totalFull
vSoft.innerText = totalSoft

const total = (totalBack + totalFront + totalFull + totalSoft)

vTotal.innerHTML = total
}

//FUNÇÃO ATUALIZAR LISTA
function attLista () {
    ulDica.innerHTML = ''
    
    listaItem
    .filter((item) => item.titulo.toLocaleLowerCase ().includes(buscar.value))
    .forEach ((item) => {
        const novaDica = criarElemento (item)
        ulDica.appendChild(novaDica)
    })
    contadorCard()
}
form.addEventListener ('submit', (event) => {
    //evita o comportamento padrão do navegador
    event.preventDefault()
    
    // chama a função de criação de dicas
    // ulDica.innerHTML = ''    
    criarDicas()
    attLista()
})
form.addEventListener ('reset', (event) => {
    edicao = false
    //evita o comportamento padrão do navegador
    console.log ('reset')
})

btnBusca.addEventListener ('click', () => {
       // const pesquisar = buscar.value; 
    // console.log({pesquisar})
    attLista()
})
btnLimpaB.addEventListener ('click', () => {
    buscar.value = '' 
    
    attLista()
})

//FUNÇÃO SALVAR ITENS NO JSON
function salvarJson (){
    const listaJson = JSON.stringify(listaItem)
    localStorage.setItem ('listaSalva', listaJson)
}

//FUNÇÃO CARREGAR ITENS DO JSON
function puxarJson (){
    const listaJson = localStorage.getItem('listaSalva')
    // console.log(listaJson)
    if (listaJson) {
        listaItem = JSON.parse(listaJson)
    }
    console.log ({listaJson})     
}

puxarJson()
attLista()