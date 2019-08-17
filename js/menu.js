var botao = $('#principal'), contador = 0, corpo = $('body');
//botao.css({"border-bottom-width": "2px", "border-bottom-color": "#00FF7F"});
var navegador = $('#nav');
var nome = "neto";
alert(nome.toUpperCase());
botao.click(function(){
	botao.toggleClass('fundo');
	navegador.toggleClass("navegador");
	if(contador % 2 == 0){
		navegador.append('<nav class="menu"><ul class="lista"><li><a href="#">Home</a></li><li><a href = "#">Projetos</a></li><li><a href="#">Contato</a></li></ul></nav>');
		botao.text(" Voltar");
		contador++;
	}
	else{
		alert("aaa");
		$('nav[class = menu]').remove();
		botao.text(" Menu");
		contador++;
	}
});