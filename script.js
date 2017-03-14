
// funcao que adiciona/remove classe do body de acordo com a categoria do elemento
function adicionarClasseBody(evt){
	var categoria = evt.target.getAttribute('data-categoria');
	evt.target.classList.toggle('ativo');
	document.querySelector('body').classList.toggle(categoria);
}

// obtem todos os items do menu
var itemsMenu = document.getElementsByClassName('menu-item');
// adiciona o evento de clique em todos items do menu
for(var i = 0; i < itemsMenu.length; i++){
	itemsMenu[i].addEventListener('click',adicionarClasseBody);
}