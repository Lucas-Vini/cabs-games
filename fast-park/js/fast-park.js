var height = window.innerHeight
var width = window.innerWidth

function getWindowSize(){
	height = window.innerHeight
	width = window.innerWidth
	console.log(height)
	console.log(width)
}

function createBallAtRandomPosition(){
	if (document.getElementById('ball')){
		document.getElementById('ball').remove()
	}
	console.log("fui clicado")
	xPosition = Math.floor(Math.random()*(width-50))
	yPosition = Math.floor(Math.random()*(height-50))
	var ball = document.createElement('div')
	ball.id = 'ball'
	ball.className = 'red-ball'
	ball.style.left = xPosition + 'px'
	ball.style.top = yPosition + 'px'
	document.body.appendChild(ball)
}