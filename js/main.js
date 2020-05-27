var i = 0;
var question = 1;
var reci = 0;
var polu = 0
var mat = 
	[
		["E", ""],
		["B", ""],
		["B", ""],
		["A", ""],
		["D", ""],
		["B", ""],
		["E", ""],
		["C", ""],
		["A", ""],
		["C", ""],
		["C", ""],
		["C", ""],
		["C", ""],
		["A", ""],
		["A", ""],
		["C", ""]
	];

function saveAnswer(){
	if (question >= 17){
		nextQuestion(17);
	} else {
		mat[i][1] = (document.querySelector('input[name="alt"]:checked').value);

		i++;
		question++;
		nextQuestion(question);
	}
}

function nextQuestion(x){
	switch(x)
	{
		case 1:
			document.getElementById("question").innerHTML = "1) Os materiais recicláveis são de total importância pois eles auxiliam:";
			document.getElementById("rdb1").innerHTML = "As industrias crescer.";
			document.getElementById("rdb2").innerHTML = "O ambiente ficar limpo.";
			document.getElementById("rdb3").innerHTML = "Auxilia o movimento sustentável. ";
			document.getElementById("rdb4").innerHTML = "Quebra a poluição de córregos, rios e outros.";
			document.getElementById("rdb5").innerHTML = "Auxilia no tratamento da limpeza ambiental.";
		break;

		case 2:
			document.getElementById("question").innerHTML = "2) A importância da separação dos resíduos é essencial pois?";
			document.getElementById("rdb1").innerHTML = "Auxilia limpar a casa.";
			document.getElementById("rdb2").innerHTML = "Na reciclagem é necessário separar para saber o que irá acontecer com o material.";
			document.getElementById("rdb3").innerHTML = "Quebra de negócios.";
			document.getElementById("rdb4").innerHTML = "Retribuição de danos. ";
			document.getElementById("rdb5").innerHTML = "Contribuição de impostos.";
		break;

		case 3:
			document.getElementById("question").innerHTML = "3) Na seletiva AMARELA o que NÃO pode ser posto nela?";
			document.getElementById("rdb1").innerHTML = "Ferro.";
			document.getElementById("rdb2").innerHTML = "Madeira.";
			document.getElementById("rdb3").innerHTML = "Lata.";
			document.getElementById("rdb4").innerHTML = "Faca.";
			document.getElementById("rdb5").innerHTML = "Panela.";
		break;

		case 4:
			document.getElementById("question").innerHTML = "4) Quais são as seletivas com menor frequência de ser vista?";
			document.getElementById("rdb1").innerHTML = "Roxo, preto, branco e cinza.";
			document.getElementById("rdb2").innerHTML = "Azul, roxo, branco e amarelo.";
			document.getElementById("rdb3").innerHTML = "Branco, verde, azul e vermelho.";
			document.getElementById("rdb4").innerHTML = "Vermelho, amarelo, azul e verde.";
			document.getElementById("rdb5").innerHTML = "Laranja, branco, marrom e azul.";
		break;

		case 5:
			document.getElementById("question").innerHTML = "5) Quais são as seletivas com maior frequência de ser vista?";
			document.getElementById("rdb1").innerHTML = "Laranja, branca, cinza e azul.";
			document.getElementById("rdb2").innerHTML = "Marrom, cinza, amarela e vermelha.";
			document.getElementById("rdb3").innerHTML = "Preto, cinza, roxa e azul.";
			document.getElementById("rdb4").innerHTML = "Azul, amarela, vermelha e verde.";
			document.getElementById("rdb5").innerHTML = "Roxo, verde, branco, e laranja.";
		break;

		case 6:
			document.getElementById("question").innerHTML = "6) Quais são os benefícios para o meio ambiente através da reciclagem.";
			document.getElementById("rdb1").innerHTML = "Melhoria nos rios córregos e lagos.";
			document.getElementById("rdb2").innerHTML = "Melhoria em todos os ambiente.";
			document.getElementById("rdb3").innerHTML = "Aumento na poluição";
			document.getElementById("rdb4").innerHTML = "Quebra na economia";
			document.getElementById("rdb5").innerHTML = "Poluição sonora. ";
		break;

		case 7:
			document.getElementById("question").innerHTML = "7) Quais os malefícios para o meio ambiente se não houver reciclagem.";
			document.getElementById("rdb1").innerHTML = "Melhoria poluição";
			document.getElementById("rdb2").innerHTML = "Ajuste na corrupção ";
			document.getElementById("rdb3").innerHTML = "Prejuízo nos ambientes. ";
			document.getElementById("rdb4").innerHTML = "Sem limpeza ambiental.";
			document.getElementById("rdb5").innerHTML = "Aumento na poluição em rios, mares, córregos e etc.";
		break;

		case 8:
			document.getElementById("question").innerHTML = "8) Os materiais que são considerados poluentes são os?";
			document.getElementById("rdb1").innerHTML = "Vento.";
			document.getElementById("rdb2").innerHTML = "Água.";
			document.getElementById("rdb3").innerHTML = "Papel, metal, madeira, plástico.";
			document.getElementById("rdb4").innerHTML = "Cavalo, vaca e boi.";
			document.getElementById("rdb5").innerHTML = "Urso e abelhas.";
		break;

		case 9:
			document.getElementById("question").innerHTML = "9) Qual é o motivo da poluição na água?";
			document.getElementById("rdb1").innerHTML = "Lixos jogados e o acumulo deles na água.";
			document.getElementById("rdb2").innerHTML = "Pelos peixes.";
			document.getElementById("rdb3").innerHTML = "Papel, metal, madeira, plástico e outros.";
			document.getElementById("rdb4").innerHTML = "metal.";
			document.getElementById("rdb5").innerHTML = "Água.";
		break;

		case 10:
			document.getElementById("question").innerHTML = "10) Qual doença é capaz de ser adquirida através da poluição do ar?";
			document.getElementById("rdb1").innerHTML = "Dengue.";
			document.getElementById("rdb2").innerHTML = "Micose.";
			document.getElementById("rdb3").innerHTML = "Doenças pulmonar.";
			document.getElementById("rdb4").innerHTML = "Acnes.";
			document.getElementById("rdb5").innerHTML = "Dor de cabeça.";
		break;

		case 11:
			document.getElementById("question").innerHTML = "11) Quais doenças são possíveis de ser adquirida por conta dos maltrato com a agua?";
			document.getElementById("rdb1").innerHTML = "Enxaqueca.";
			document.getElementById("rdb2").innerHTML = "Micose.";
			document.getElementById("rdb3").innerHTML = "Leptospirose e amebíase.";
			document.getElementById("rdb4").innerHTML = "Diabete.";
			document.getElementById("rdb5").innerHTML = "Colesterol.";
		break;

		case 12:
			document.getElementById("question").innerHTML = "12) Quem pode tomar medidas sustentáveis?";
			document.getElementById("rdb1").innerHTML = "Apenas o governo.";
			document.getElementById("rdb2").innerHTML = "Apenas a população.";
			document.getElementById("rdb3").innerHTML = "Ambos.";
			document.getElementById("rdb4").innerHTML = "Ninguém.";
			document.getElementById("rdb5").innerHTML = "Os animais.";
		break;

		case 13:
			document.getElementById("question").innerHTML = "13) Quais são as possíveis medidas?";
			document.getElementById("rdb1").innerHTML = "Aumento nas queimas.";
			document.getElementById("rdb2").innerHTML = "Aumento no desmatamento.";
			document.getElementById("rdb3").innerHTML = "Diminuição de todos que forem citados na alternativa.";
			document.getElementById("rdb4").innerHTML = "Cavalo, vaca e boi.";
			document.getElementById("rdb5").innerHTML = "Urso e abelhas.";
		break;

		case 14:
			document.getElementById("question").innerHTML = "14) A energia renovável é uma alternativa de medida sustentável?";
			document.getElementById("rdb1").innerHTML = "Sim.";
			document.getElementById("rdb2").innerHTML = "Não.";
			document.getElementById("rdb3").innerHTML = "As vezes.";
			document.getElementById("rdb4").innerHTML = "Nunca.";
			document.getElementById("rdb5").innerHTML = "NDA.";
		break;

		case 15:
			document.getElementById("question").innerHTML = "15) De acordo com a energia eólica como é formada?";
			document.getElementById("rdb1").innerHTML = "Através de ventos.";
			document.getElementById("rdb2").innerHTML = "Bobinas.";
			document.getElementById("rdb3").innerHTML = "Queimas e desmatamento.";
			document.getElementById("rdb4").innerHTML = "Com queima de lixos.";
			document.getElementById("rdb5").innerHTML = "Óleo de usina.";
		break;

		case 16:
			document.getElementById("question").innerHTML = "16) Ainda falando de medida sustentável, é possivel dizer que:";
			document.getElementById("rdb1").innerHTML = "Todos podem não ter consciência de suas atitudes.";
			document.getElementById("rdb2").innerHTML = "Ninguém deve fazer elas.";
			document.getElementById("rdb3").innerHTML = "Todos podem ter consciência de suas atitudes, e melhoria nos hábitos.";
			document.getElementById("rdb4").innerHTML = "Ninguém deve ajudar a natureza, ela mesma não ajuda em nada.";
			document.getElementById("rdb5").innerHTML = "NDA.";
		break;

		case 17:
			for (var i = 0; i < 7; i++) {
				if (mat[i][0] == mat[i][1]){
					reci += 1;
				}
			}

			for (var i = 7; i < 14; i++) {
				if (mat[i][0] == mat[i][1]){
					polu += 1;
				}
			}

			var result_reci = reci * 1.25;
			var result_polu = polu * 1.25;
			var result = (result_reci + result_polu) / 2;

			document.getElementById("pont_reci").innerHTML = reci + " de 8";
			document.getElementById("pont_polu").innerHTML = polu + " de 8";
			document.getElementById("pont_final").innerHTML = "Pontuação Final: " + result.toFixed(2);
			
			$('#aviso').modal('show');
			question = 17;
		break
	}
	if (x == 17){
		document.getElementById("nextQuest").innerHTML = "Questão 16 de 16";
	} else {
			document.getElementById("nextQuest").innerHTML = "Questão " + x + " de 16";
	}
}

function reset(){
	i = 0;
	question = 1;
	reci = 0;
	polu = 0;

	nextQuestion(question);
}
