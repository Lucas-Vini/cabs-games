var tictactoe = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var sqs = ['sq1', 'sq2', 'sq3', 'sq4', 'sq5', 'sq6', 'sq7', 'sq8', 'sq9']
var game_over = false
var tie = false
var analysingGame = false

//check if someone won the game
function checkGame(i){
	if (tictactoe[0] == i && tictactoe[1] == i && tictactoe[2] == i) {
		displayWinner(i, "sq1", "sq2", "sq3")
	} else if (tictactoe[3] == i && tictactoe[4] == i && tictactoe[5] == i) {
		displayWinner(i, "sq4", "sq5", "sq6")
	} else if (tictactoe[6] == i && tictactoe[7] == i && tictactoe[8] == i) {
		displayWinner(i, "sq7", "sq8", "sq9")
	} else if (tictactoe[0] == i && tictactoe[3] == i && tictactoe[6] == i) {
		displayWinner(i, "sq1", "sq4", "sq7")
	} else if (tictactoe[1] == i && tictactoe[4] == i && tictactoe[7] == i) {
		displayWinner(i, "sq2", "sq5", "sq8")
	} else if (tictactoe[2] == i && tictactoe[5] == i && tictactoe[8] == i) {
		displayWinner(i, "sq3", "sq6", "sq9")
	} else if (tictactoe[0] == i && tictactoe[4] == i && tictactoe[8] == i) {
		displayWinner(i, "sq1", "sq5", "sq9")
	} else if (tictactoe[2] == i && tictactoe[4] == i && tictactoe[6] == i) {
		displayWinner(i, "sq3", "sq5", "sq7")
	} else{
		tie = true
		for (sq in tictactoe){
			if (tictactoe[sq] == 0){
				tie = false
				break
			}
		}
		if (tie == true){
			displayWinner(3)
		}
	}
}
//Display the game result
function displayWinner(i, sq_a, sq_b, sq_c){
	game_over = true
	if (i == 1){
		applyClass = " text-success"
		msg = "Parabéns, você ganhou!"
	} else if (i == 2){
		applyClass = " text-danger"
		msg = "Você perdeu :("
	} else{
		result = document.getElementById("result")
		result.textContent = "Deu empate."
		$('#exampleModalCenter').modal('show')
		return
	}


	var sq_winner1 = document.getElementById(sq_a)
	var sq_winner2 = document.getElementById(sq_b)
	var sq_winner3 = document.getElementById(sq_c)

	var flasher = setInterval(function(){
		setTimeout(function(){
			sq_winner1.className = "icons-tictactoe text-center"
			sq_winner2.className = "icons-tictactoe text-center"
			sq_winner3.className = "icons-tictactoe text-center"
					console.log("classe removida")
		}, 250)
		sq_winner1.className += applyClass
		sq_winner2.className += applyClass
		sq_winner3.className += applyClass
		console.log("classe adicionada")
	}, 500)



	setTimeout(function(){
		clearInterval(flasher)
		result = document.getElementById("result")
		result.textContent = msg
		$('#exampleModalCenter').modal('show')
	}, 3500)


}

//mark "x" in the position choosen by the player
function playerTurn(sq){
	if (!game_over){
		if (tictactoe[sq] == 0){

			tictactoe[sq] = 1
			var sq_mark = document.getElementById(sqs[sq])
			sq_mark.textContent = "x"
			sq_mark.className += " x-icon"
			checkGame(1)
			if (!game_over){
				computerTurn()
			}
		}
	}
}

//mark "o" in a random position
function computerTurn(){
	if (!game_over){
		var sq = Math.floor(Math.random() * 9);
		for (var i = 0; i < 9; i++){
			if (tictactoe[sq] == 0){
				tictactoe[sq] = 2
				var sq_mark = document.getElementById(sqs[sq])
				sq_mark.textContent = "o"
				sq_mark.className += " o-icon"
				break
			} else {
				if (sq == 8){
					sq = 0
				} else{
					sq += 1
				}
			}
		}
		checkGame(2)
	}
}

//reset the game
function newGame(){
	tictactoe = [0, 0, 0, 0, 0, 0, 0, 0, 0]
	game_over = false
	var analyseGame = false
	for(sq in sqs){
		var cleanSq = document.getElementById(sqs[sq])
		cleanSq.textContent = ""
		cleanSq.className = "icons-tictactoe text-center"
	}
	$('#exampleModalCenter').modal('hide')
	analysingGame = false
}

//just wait the user analyse the game
function analyseGame() {
	analysingGame = true
}
//show modal to restar the game
function bodyNewGame() {
	if (analysingGame == true){
		$('#exampleModalCenter').modal('show')
	}
}