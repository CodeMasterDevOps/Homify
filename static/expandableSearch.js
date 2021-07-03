const search = document.querySelector('.searchCstm');
const conto = document.querySelector('.cont');
const icon = document.querySelector('.iconCstm');
const body = document.querySelector('body');
const close = document.querySelector('#customSearchClose');
const divy = document.querySelector('div');

icon.onclick = function() {
    search.classList.add('expand');
}

close.onclick = function() {
    search.classList.remove('expand');
}

/*
window.addEventListener('click', outsideclick);

function outsideclick (e) {
    if (e.target != search) {
        console.log('BODY')
        search.classList.remove('expand');
    }
}
*/

