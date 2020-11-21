
const readlineSync = require('readline-sync')
	
	var resposta = readlineSync.question("Digite um Bin code: ")
	var qtdResposta = resposta.length - 1
	var arraysposta = resposta.split('')
	var resultado = 0

	function validarInput () {
		if (isNaN(resposta)) {
			console.log("Erro!")
		} else {
			for (var i = 0; i <= qtdResposta; i++) {
				if (arraysposta[i] == 0 || arraysposta[i] == 1) {} else {
					console.log("Erro!")
					break
				}
			}
		}
	}


	function converter () {
		for (var i = qtdResposta; i >= 0; i--) {
			resultado += (arraysposta[i] * 2**(qtdResposta - i))
		}
		console.log()
		console.log(resultado)
	}
	validarInput()
	converter()