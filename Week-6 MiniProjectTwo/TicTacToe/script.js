console.log('chaliye shuru karte hain ');
const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".gameInfo");
const newGameBtn = document.querySelector(".btn");

let currentPlayer;
let gameGrid;

const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function initGame () {
    currentPlayer = "X";
    gameGrid = ["","","","","","","","",""];
    // UI par bhi boxes ko empty karna padega   
    boxes.forEach((box, index) => {
        box.innerText = "";
        boxes[index].style.pointerEvents = "all";
        // initialize boxes with css properties again
        box.classList = `box box${index + 1}`;
    })
    
    newGameBtn.classList.remove("active");
    gameInfo.innerText = `Current Player = ${currentPlayer}`;

}

initGame();

newGameBtn.addEventListener('click', initGame);

function checkGameOver() {
    let answer = "";

    winningPositions.forEach((position) => {
        if( (gameGrid[position[0]] !== "" || gameGrid[position[1]] !== "" || gameGrid[position[2]] !=="")
            && (gameGrid[position[0]] === gameGrid[position[1]] )
            && (gameGrid[position[1]] === gameGrid[position[2]] )        )
            {
                if(gameGrid[position[0]] === "X"){
                    answer = "x";
                }
                else{
                    answer ="Y";
                }

                boxes[position[0]].classList.add("win");
                boxes[position[1]].classList.add("win");
                boxes[position[2]].classList.add("win");

            }



    })

    
    
    
    
    
    
    
    
}


function swapTurn(){
    if (currentPlayer ==="X") {
        currentPlayer = "O";
    }
    else {
        currentPlayer = "X";
    }

    gameInfo.innerText = `Current Player = ${currentPlayer}`;
}


function handleClick(index){
    if(gameGrid[index] === "") {
        boxes[index].innerText = currentPlayer;
        gameGrid[index] = currentPlayer;
        boxes[index].style.pointerEvents = "none";        
        // swap karo turn ko
        swapTurn();

        // check karo koi jeet to nahi gaya
        checkGameOver();
        
    }
}

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        handleClick(index);
    })
});
