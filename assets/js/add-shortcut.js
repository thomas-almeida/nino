'use strict'


var addShortcut = document.getElementById('add-shortcut')
var link_1 = document.getElementById('atalho_nome_1')
var link_2 = document.getElementById('atalho_nome_2')
var link_3 = document.getElementById('atalho_nome_3')
var link_4 = document.getElementById('atalho_nome_4')
var link_5 = document.getElementById('atalho_nome_5')
var link_6 = document.getElementById('atalho_nome_6')

addShortcut.addEventListener('click', function () {

    var getLink = prompt('nome do site: (site.com.br) ')
    link.innerText = getLink

})