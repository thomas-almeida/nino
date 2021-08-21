'use strict'

//capturando elementos
var searchButton = document.getElementById('searchButton')
var addShortcut = document.getElementById('add-shortcut')
var searchInput = document.getElementById('search')
var colorMode = document.getElementById('modoBlack')
var colorMode_count = 0
var backgroundBody = document.getElementById('body')
var backgroundFooter = document.getElementById('footer')
var colorH3 = document.getElementById('h3')

var atalhoDiv_1 = document.getElementById('atalho_1')
var atalhoDiv_2 = document.getElementById('atalho_2')
var atalhoDiv_3 = document.getElementById('atalho_3')
var atalhoDiv_4 = document.getElementById('atalho_4')
var atalhoDiv_5 = document.getElementById('atalho_5')
var atalhoDiv_6 = document.getElementById('atalho_6')

// H2 do Atalho 1, imagem e contador,
// usado como ponteiro de estado.
var link_1 = document.getElementById('atalho_nome_1')
var link_1_conter = 0
//var logoShort_1 = document.getElementById('logoShort_1')

// H2 dos Atalhos (Não usados ainda)
var link_2 = document.getElementById('atalho_nome_2')
var link_2_conter = 0

var link_3 = document.getElementById('atalho_nome_3')
var link_3_conter = 0

var link_4 = document.getElementById('atalho_nome_4')
var link_4_conter = 0

var link_5 = document.getElementById('atalho_nome_5')
var link_5_conter = 0

var link_6 = document.getElementById('atalho_nome_6')
var link_6_conter = 0


//Edit buttons
var edit_0 = document.getElementById('edit-0') //link 1
var edit_1 = document.getElementById('edit-1') //link 2
var edit_2 = document.getElementById('edit-2') //link 3
var edit_3 = document.getElementById('edit-3') //link 4
var edit_4 = document.getElementById('edit-4') //link 5
var edit_5 = document.getElementById('edit-5') //link 6


var addLink_1 = document.getElementById('addLink_1')

// Fazer abrir outra página de pesquisa no google
searchButton.addEventListener('click', function () {
    //Abrir outra aba do navegador com a url customizada
    window.open('https://www.google.com/search?q=' + searchInput.value)
    //limpar caixa de texto
    searchInput.value = ""
})


// Modo Black & White, Dinamizando o css dos elementos
colorMode.addEventListener('click', function(){
  
    if(colorMode_count == 0){
        
        backgroundBody.style.backgroundColor = '#333'
        backgroundFooter.style.backgroundColor = '#333'
        colorH3.style.color = '#fff'
        searchInput.style.backgroundColor = '#333'
        searchInput.style.color = '#fff'

        atalhoDiv_1.style.backgroundColor = '#333'
        atalhoDiv_1.style.color = '#fff'
        
        atalhoDiv_2.style.backgroundColor = '#333'
        atalhoDiv_2.style.color = '#fff'
        
        atalhoDiv_3.style.backgroundColor = '#333'
        atalhoDiv_3.style.color = '#fff'
        
        atalhoDiv_4.style.backgroundColor = '#333'
        atalhoDiv_4.style.color = '#fff'

        atalhoDiv_5.style.backgroundColor = '#333'
        atalhoDiv_5.style.color = '#fff'

        atalhoDiv_6.style.backgroundColor = '#333'
        atalhoDiv_6.style.color = '#fff'

        colorMode_count = 1
        colorMode.innerText = 'Modo Claro'
    }else{
        backgroundBody.style.backgroundColor = '#fff'
        backgroundFooter.style.backgroundColor = 'whitesmoke'
        colorH3.style.color = '#000'
        searchInput.style.backgroundColor = '#fff'
        searchInput.style.color = '#000'

        atalhoDiv_1.style.backgroundColor = '#fff'
        atalhoDiv_1.style.color = '#000'
        
        atalhoDiv_2.style.backgroundColor = '#fff'
        atalhoDiv_2.style.color = '#000'
        
        atalhoDiv_3.style.backgroundColor = '#fff'
        atalhoDiv_3.style.color = '#000'
        
        atalhoDiv_4.style.backgroundColor = '#fff'
        atalhoDiv_4.style.color = '#000'

        atalhoDiv_5.style.backgroundColor = '#fff'
        atalhoDiv_5.style.color = '#000'

        atalhoDiv_6.style.backgroundColor = '#fff'
        atalhoDiv_6.style.color = '#000'
        

        colorMode_count = 0
        colorMode.innerText = 'Modo Escuro'

    }


})



//Configuração de atalho (FASE // TESTE)
addLink_1.addEventListener('click', function (site) {

    if (link_1_conter == 0) {

        //Configurando Atalho
        var site = prompt('Digite o nome de um site favorito (apenas nome)')

        if (site == "") {
            alert('o nome do atalho não pode ficar vazio 😥')
        }else{
            
            link_1.innerText = site
            addLink_1.innerText = 'ir para o site'
            link_1_conter = 1

            /* Tratamento de estring, removendo espaços 
            e tirando letras maiúsculas */
            console.log(site.replace(/\s/g,'').toLocaleLowerCase())

            //Esconder imagem do atalho (por enquanto KKKK)
            //logoShort_1.style.display = 'none'

            //Eu tava Tentando pegar o logo dos sites (não funfou, mas foi quase KK)
            //logoShort_1.src = "'https://www.' + link_1.innerText + '.com/favicon.ico"

        }

    } else {
        //Atalho já configurado

        //Fazendo Busca no Google
        //window.open('https://www.google.com/search?q=' + link_1.innerText)

        //Levando Direto ao Site (com o tratamento de String e tirando letras maíusculas da url)
        window.open('https://www.' + link_1.innerText.replace(/\s/g,'').toLocaleLowerCase() + '.com/')
    }

})


edit_0.addEventListener('click', function(){
    var newSiteName_0 = prompt('Digite o nome do site:')
   
    if (newSiteName_0 == "") {
        alert('o nome do atalho não pode ficar vazio 😥')
    }else{
        
        link_1.innerText = newSiteName_0
        addLink_1.innerText = 'ir para o site'
        link_1_conter = 1

        //Esconder imagem do atalho
        logoShort_1.style.display = 'none'

        //Tentando pegar o logo dos sites (não funfou, mas foi quase KK)
        //logoShort_1.src = "'https://www.' + link_1.innerText + '.com/favicon.ico"

    }
})