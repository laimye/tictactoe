/* ---- variables ---*/

var input, player, clickedEl, button, board;
// var a, b, c, d, e, f, g, h ,i;
var player = 'X';
 var clickedEl = '';


/* --- event listener ---*/

document.getElementById("TTT")
	.addEventListener('click', handleClick);

document.getElementById('resetButton')
	.addEventListener('click', initialize);



/* ----- functions ------*/
function initialize() {
	var cells = document.getElementsByClassName('cell');
	for (var i = 0; i < cells.length; i++) {
		cells[i].textContent = '';
	}
	player = 'X';
	board = ['', '', '', '', '', '', '', '', ''];
}

//initialize();


function updateDisplay() {
	var text = 'X' || 'O' || null;
}

function handleClick(evt) {
	var clickedEl = evt.target;
	if(clickedEl.textContent != '') return;
	evt.target.textContent = player;
		switch (clickedEl.id) {
			case "a":
				a = player;
				break;
			case "b":
				b = player;
				break;
			case "c":
				c = player;
				break;
			case "d":
				d = player;
				break;
			case "e":
				e = player;
				break;
			case "f":
				f = player;
				break;
			case "g":
				g = player;
				break;
			case "h":
				h = player;
				break;
			case "i":
				i = player;
				break;
			}
		checkWinner();
		switchPlayer();
}

player = switchPlayer(player)


function switchPlayer() {
	player = (player === 'X') ? '0' : 'X';
	return player;
}

function checkWinner() {
	if ((a == b && b == c && b != null)
		|| (d == e && e == f && e != null) 
		|| (g == h && h == i && h != null) 
		|| (a == d && d == g && d != null) 
		|| (b == e && e == h && e != null) 
		|| (c == f && f == i && f != null) 
		|| (a == e && e == i && e != null) 
		|| (c == e && e == g && e != null)) {
	alert("Congratulations, " + player);
	return true;
	} else {
	return false;
	}
}



/*function updateDisplay() {
	board.forEach(function(cell, idx) {
		.document.getElementById('cell' + idx).textContent = cell;
	})
}


function handleClick(evt) {
	var.cellIdx = evt.target.id.substr(4);
	board[cellIdx] = player;
	checkWinner();
	switchPlayer();
	updateDisplay();
}