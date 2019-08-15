var botao = document.getElementById("principal"), contador = 0, corpo = document.querySelector("body");
	botao.onclick = function(){
		var navegador = document.getElementById("nav");
		if(contador % 2 == 0){
			navegador.className = "navegador";
			navegador.innerHTML = 
			'<nav class="menu"><ul class="lista"><li><a href="#">Home</a></li><li><a href = "#">Projetos</a></li><li><a href="#">Contato</a></li></ul></nav>';
			botao.textContent = " Voltar";
			contador++;
		}
		else{
			navegador.className = "";
			contador++;
			navegador.innerHTML = "";
			botao.textContent = " Menu";
		}

		corpo.onclick = function(){
			navegador.className = "";
		};

};