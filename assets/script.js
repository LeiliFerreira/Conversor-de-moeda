let valorReal = ""; // Variável que irá receber o valor inserido pelo usuário. 
let valorDolar; // Variável que irá receber o resultado da conversão do valor em real para dólar 

function conversor() { 
	valorReal = document.getElementById("valorReal").value; // Capturando valor em real. 
	valorReal = parseFloat(valorReal); // Convertendo o texto inserido pelo usuário para um valor do tipo float. 
	valorDolar = valorReal * 4.73; // Convertendo o valor em real de acordo com a cotação hoje (01/06/2022) em dólar. 
	valorDolar  = (valorDolar.toFixed(2)); // Arredondando o numero à casa decimal mais próxima e apenas 2 números depois da vírgula serão mostrados.
	
	document.getElementById("resultConversao").innerHTML = "$ " + valorDolar; // Mostrando o resultado no id "resultConversao".
}