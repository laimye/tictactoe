/* ---- pseudocode ---*/
  
  /*1. There are two players - 'X' and '0';
  2. the game starts with an empty board;
  3. first player is X;
  4. players should be switched after each move;
  5.the game starts when a player clicks on one of the cells 
    a. addEventListener for 'click'
  6. Functions:
    a. The main function is handleClick;
    b. when a player clicks a cell the 'X' or '0' should appear and the board is updated;
    c.If the clicked cell is != '', return/ignore to prevent overwriting the value in the cell;
    d. check for winning combinations (row, column, diagonal)
      1. if there is no match, continue the game;
      2. if there is a match, display alert "Congratulations, X/0";
  7. Reset the game invoked by clicking the reset button - clear the board and all stored values; */

/* --- variables ---*/

var	board = ['', '', '', '', '', '', '', '', ''];



var clickedEl, button;
var player = 'X';


/*event listeners ---*/

document.getElementById("TTT")
	.addEventListener('click', handleClick);
document.getElementById('resetButton')
	.addEventListener('click', initialize);


/* --- functions ---*/

function initialize() {
	var cells = document.getElementsByClassName('cell');
	for (var i = 0; i < cells.length; i++) {
		cells[i].textContent = '';
	}
	board = ['', '', '', '', '', '', '', '', ''];
	player = 'X';
}

function updateBoard(evt) {
	var idx = evt.target.id;
	board[idx] = player;
	console.log(board);
}

function checkWinner() {
	if ((board[0] == board[1] && board[1] == board[2] && board[1] != '') 
		|| (board[3] == board[4] && board[4] == board[5] && board[4] != '')
		|| (board[6] == player && board[7] == player && board[8] == player)
		|| (board[0] == player && board[3] == player && board[6] == player)
		|| (board[1] == player && board[4] == player && board[7] == player)
		|| (board[2] == player && board[5] == player && board[8] == player)
		|| (board[0] == player && board[4] == player && board[8] == player)
		|| (board[2] == player && board[4] == player && board[6] == player)) {
		alert('Congratulations, ' + player);
	} else {
		return false;
	}
}

function handleClick(evt) {
	var clickedEl = evt.target;
	if(clickedEl.textContent != '') return;
	console.log(evt.target.id);
	document.getElementById(evt.target.id).textContent = player;
	updateBoard(evt);
	checkWinner();
 	switchPlayer();
 }

 player = switchPlayer(player)


 function switchPlayer() {
 	player = (player === 'X') ? '0' : 'X';
 	return player;
 }
