'use strict'

var searchButton = document.getElementById('searchButton')
var addShortcut = document.getElementById('add-shortcut')
var searchInput = document.getElementById('search')

// H2 do Atalho 1, imagem e contador,
// usado como ponteiro de estado.
var link_1 = document.getElementById('atalho_nome_1')
var link_1_conter = 0
var logoShort_1 = document.getElementById('logoShort_1')

// H2 dos Atalhos (Não usados ainda)
var link_2 = document.getElementById('atalho_nome_2')
var link_3 = document.getElementById('atalho_nome_3')
var link_4 = document.getElementById('atalho_nome_4')
var link_5 = document.getElementById('atalho_nome_5')
var link_6 = document.getElementById('atalho_nome_6')
// 

var addLink_1 = document.getElementById('addLink_1')

// Fazer abrir outra página de pesquisa no google
searchButton.addEventListener('click', function () {
    //Abrir outra aba do navegador com a url customizada
    window.open('https://www.google.com/search?q=' + searchInput.value)
    //limpar caixa de texto
    searchInput.value = ""
})


//Configuração de atalho (FASE // TESTE)
addLink_1.addEventListener('click', function (site) {

    if (link_1_conter == 0) {
        
        //Configurando Atalho
        var site = prompt('Digite o nome de um site favorito (apenas nome)')
        link_1.innerText = site
        addLink_1.innerText = 'ir para o site'
        link_1_conter = 1
        
        //Esconder imagem do atalho
        logoShort_1.style.display = 'none'
        
        //Tentando pegar o logo dos sites (não funfou, mas foi quase KK)
        //logoShort_1.src = "'https://www.' + link_1.innerText + '.com/favicon.ico"

    } else {
        //Atalho já configurado

        //Fazendo Busca no Google
        //window.open('https://www.google.com/search?q=' + link_1.innerText)

        //Levando Direto ao Site
        window.open('https://www.' + link_1.innerText + '.com/')
    }

})
