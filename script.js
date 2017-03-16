
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



function Filme(categorias, imagem, titulo, sinopse){
	// propriedades
	this.categorias = categorias;
	this.imagem = imagem;
	this.titulo = titulo;
	this.sinopse = sinopse;
		
	// construtor
		var article = document.createElement('article');
		var img = document.createElement('img');
		var div = document.createElement('div');
		var h1 = document.createElement('h1');
		var p = document.createElement('p');
		var footer = document.createElement('footer');
				
		for(var i = 0; i < categorias.length; i++){
			article.classList.add(categorias[i]);
		};
		
		img['src'] = imagem;	
		h1.textContent = titulo;
		p.textContent = sinopse;
		
		article.appendChild(img);
		article.appendChild(div);
		div.appendChild(h1);
		div.appendChild(p);
		article.appendChild(footer);
		
		document.querySelector('section').appendChild(article);	
};


var filme1 = new Filme(["filme", "aventura", "historico", "fantasia"], "http://br.web.img1.acsta.net/cx_160_213/b_1_d6d6d6/pictures/16/08/01/14/48/338063.jpg", "A GRANDE MURALHA", "Um grupo de soldados britânicos está lutando na China e se depara com o início das construções da Grande Muralha. Eles percebem que o intuito não é apenas proteger a população do inimigo mongol e que a construção esconde na verdade um grande segredo.");
