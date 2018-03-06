
var flag = 0;
function mudaLampada(){
	var img = document.getElementById('lampada1');
	if(flag === 0){
		img.src = 'imagens/lampada_acessa.jpg'
		flag = 1;
	} else if (flag === 1){
		img.src = 'imagens/lampada_apagada.jpg'
		flag = 0 ;
	}
}


function alerta(){
    window.alert('ALERTA');
}


document.getElementById("meuH").innerHTML = "Minha Primeira Página";
document.getElementById("meuP").innerHTML = "Meu Primeiro Parágrafo.";


function verificaTipo(){
    var teste5 = "John"
    var teste7 = 7;
    document.getElementById("teste5").innerHTML = typeof teste5;
    document.getElementById("teste6").innerHTML = typeof teste6;
    document.getElementById("teste7").innerHTML = typeof teste7;
}


function somaNumerosComString(){
	var x = document.getElementById('n1').value + " JavaScript";
	document.getElementById("resultado").innerHTML = x;
}



function verificaTipo2(){
    var x;
    document.getElementById('var1').innerHTML = typeof x;
    var x = 5;
    document.getElementById('var2').innerHTML = typeof x;
    var x = "Joao";
    document.getElementById('var3').innerHTML = typeof x;
}


function colocaAspas(){
	var x = 'Anderson "Spider" Silva'
	document.getElementById('nomeUFC').innerHTML = x;
}


function verificaIgualdade(){
	var n = document.getElementById('numero1').value;
	var m = document.getElementById('numero2').value;
	if(n == m){
		document.getElementById('igualdade').innerHTML = true;
	}
	else{
		document.getElementById('igualdade').innerHTML = false;
	}
}



function verificaPosicaoArray(){
	var Celulares = ["motoG", "iphone8", "samsungs8", "xiaomi123", "lg345"];
	if(document.getElementById('numArray').value > 4){
		window.alert('Digite numeros de 0 até 4 !');
	}else{
		document.getElementById("verArray").innerHTML = Celulares[document.getElementById('numArray').value];
	}
}



function mudarAtributosCarro(){
    var carro = {marca:"Toyota", ano:2017, preco:40.000, cor:"branco", modelo:"etios"};

        carro.marca = document.getElementById("novaMarca").value;
        carro.ano = document.getElementById("novoAno").value;
        carro.preco = document.getElementById("novoPreco").value;
        carro.cor = document.getElementById("novaCor").value;
        carro.modelo = document.getElementById("novoModelo").value;

    if(carro.marca == "" || carro.ano == "" || carro.preco == "" || carro.cor == "" || carro.modelo == ""){
        window.alert('Preencha todos os campos');
    }
    else{
        document.getElementById("marca").innerHTML = carro.marca;
        document.getElementById("ano").innerHTML = carro.ano;
        document.getElementById("preco").innerHTML = carro.preco;
        document.getElementById("cor").innerHTML = carro.cor;
        document.getElementById("modelo").innerHTML = carro.modelo;

    }

}


function calcMedia(){
	var n1 = parseFloat(document.getElementById("nota1").value);
	var n2 = parseFloat(document.getElementById("nota2").value);
	var x = parseFloat(n1 + n2) / 2;
	document.getElementById("resultadoMedia").innerHTML = x;
}


function paraGrauCelcius(k){
	return (5/9) * (k-32);
}
document.getElementById("grau").innerHTML = parseFloat(paraGrauCelcius(100).toFixed(2)) + " Graus Celsius";


function concatenaPessoa(){
	var pessoa = {	nome: "Felipe",
					idade: 26,
					faculdade: "Fatec",
					sobrenome: "Augusto",
					nomeCompleto: function(){
						return this.nome + " " + this.sobrenome}
				};

	document.getElementById("objPessoa").innerHTML = "Este é o " + pessoa.nomeCompleto() + " ele tem "
	+ pessoa.idade + " anos" + " e " + "estuda na " + pessoa.faculdade; 
}


(function(){
	function calcularNotas(){
		var total = 0;
		var qtd = arguments.length;
		var x = 0;
		
		while(typeof arguments[x] === 'number'){
			total += arguments[x];
			x++;
		}
		return total / qtd;
	}
	var nota1 = calcularNotas(2, 10);
	var nota2 = calcularNotas(5, 5, 8, 10);
	
	document.getElementById("resultadoCalcNota").innerHTML = nota1;
	document.getElementById("resultadoCalcNota2").innerHTML = nota2;
})()
	
function verificaIMC(){

	var peso = document.getElementById('peso').value;
	var altura = document.getElementById('altura').value;
	
	function calcIMC(peso, altura){
		var imc = peso / (altura * altura);
		return imc;
	}
	
	function classificaIMC(){
		if(imc <= 16.9){
			return "Muito Abaixo do Peso"
		} else if(imc <= 18.4){
			return "Abaixo do Peso"
		} else if(imc <= 24.9){
			return "Peso Normal"
		} else if(imc <= 29.9){
			return "Acima do Peso"
		} else if(imc <= 34.9){
			return "Obesidade Grau 1"
		} else if(imc <= 40){
			return "Obesidade Grau 2"
		} else {
			return "Obesidade Grau 3"
		}
	}
	
	var imc = calcIMC(peso,altura);
	var classificacao = classificaIMC(imc);
	
	document.getElementById('imc').innerHTML = imc.toFixed(2);
	document.getElementById('classificacao').innerHTML = classificacao;
}
	
function manipulaDOM(){
	document.getElementById('p-DOM').innerHTML = document.getElementById('I-DOM').value;
}

function manipulaClasseDOM(){
	var numeroFrase = document.getElementsByName('Numero-Frase');
	var fraseModificada = document.getElementById('C-DOM').value;

	for(var i = 0 ; i<numeroFrase.length; i++){
		if(numeroFrase[i].checked){
			document.getElementsByClassName('frase')[numeroFrase[i].value].textContent = fraseModificada;
		}
	}
}