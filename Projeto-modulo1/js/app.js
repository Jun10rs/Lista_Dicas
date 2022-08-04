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

const form = document.getElementById ('form-recipe')

form.addEventListener ('submit', (event) => {
    event.preventDefault()
})


// let dicas = []

// const dicas = {
//     titulo: fTitulo.value, 
//     linguagem: fLinguagem.value, 
//     // categoria: 'categoria', 
//     // skills: 'skills', 
//     // descrisao:'descrisao'
// }


// function adicionaDicas (){
//     const tituloDica = fTitulo.value
//     // const skillDica = fLinguagem.value
//     // const categDica = fSelect.value
//     // const descrDica = fDescrisao.value
//     if ( tituloDica === '') {
//         alert ('informe todos os campos')
//     } else {
//         dicas.push (fTitulo)
//         console.log(dicas)
//         // adicionadicas ()
//         // atualizaLista ()
       
//     }
// }


// function atualizaLista() {
//     ulDica.innerHTML = ''
  
//     dicas.forEach((titulo) => {
//       const li = document.createElement('li')

//       const hTitulo = document.createElement ('h1')
//       hTitulo.innerHTML = titulo    
//       li.appendChild (hTitulo)
//       console.log (dicas)

    //   const tLinguagem = document.createElement ('h3')
    //   tLinguagem.innerHTML = skills
    //   li.appendChild (tLinguagem)
    //   console.log (tLinguagem)
    //   const tCateg = document.createElement ('h3')
    //   tCateg.innerHTML = categoria
    //   li.appendChild (categoria)
    //   const ptxt = document.createElement (p)
    //   ptxt.innerHTML = descrisao
    //   li.appendChild (ptxt)

    //   ulDica.appendChild(li)
//     //   adicionadicas()    
//     })
// }





const cDicas = [
    {
    titulo: 'titulo',
    skill: 'skills',
    categoria: 'categoria',
    descrisao: 'descrisao',
}]

function criarElemento (item){

    const li = document.createElement('li')

    const titulo = document.createElement ('h1')
    titulo.innerText = item.titulo
    li.appendChild (titulo)

    const skills = document.createElement ('h3')
    skills.innerText = item.skill
    li.appendChild (skills)

    const categoria = document.createElement ('h3')
    categoria.innerText = item.categoria
    li.appendChild (categoria)

    const descrisao = document.createElement ('p')
    descrisao.innerText = item.descrisao
    li.appendChild (descrisao)

    ulDica.appendChild (li)
    return li
}

btnSalvar.addEventListener('click', criarElemento)


// const item = createItemElement ( )



// function atualizarlista (){
//     recipe.forEach((item) => {
//         const el = createItemElement (item)
//         ulDica.appendChild(el)
//     })
// }