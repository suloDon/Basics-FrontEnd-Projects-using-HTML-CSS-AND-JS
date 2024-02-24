const cells = document.querySelectorAll(".cell");
const resetButton = document.querySelector("#But");
const info = document.querySelector("#no");

const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let options = ["","","","","","","","",""];

let currentPlayer = "X";
let playing = false;

// First we create function to initialize game
initilizeGame();


function initilizeGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    resetButton.addEventListener('click', restartGame);
    info.textContent = `${currentPlayer}'s turn`;
    playing = true;
}


function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");

    if(options[cellIndex] != "" || !playing){
        return;
    }
    updateCell(this, cellIndex);
    checkWinner();
    
}

function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;

}

function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O": "X";
    info.textContent = `${currentPlayer}'s turn`;

}

function checkWinner(){
    let roundWon = false;

    for(let i = 0; i<winCondition.length; i++){
        const condition = winCondition[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA =="" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }

    if(roundWon){
        info.textContent = `${currentPlayer}'s wins`;
        playing = false;
    }else if(!options.includes("")){
        info.textContent = ` Draw<<.>>`;
        playing = false;
    }else {
        changePlayer();
    }
        

}

function restartGame(){
         currentPlayer = "X"
         options = ["","","","","","","","",""];
         info.textContent = `${currentPlayer}'s turn`;
         cells.forEach(cell => cell.textContent = "");
         playing = true;  
}





