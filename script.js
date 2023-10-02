function player(name) {
    this.name = name
    this.weapon = (marker) => {
        this.marker = marker 
    } 
}

const playerOne = new player("Player 1")
const playerTwo = new player("Player 2")

playerOne.weapon('X')
playerTwo.weapon('O')

function gameBoard(arr,input,playerNumber) {
    if (playerNumber === playerOne){
        arr[input] = playerOne.marker
    }
    else{
        arr[input] = playerTwo.marker
    }
    console.log(arr)
}
let winner = "no"

function game(arr, winner){
    for (let i=0; i<5; i++){
        if (i === 0 ){
            if (((arr[i] === arr[i+1] && arr[i+1] === arr[i+2]) || (arr[i] === arr[i+3] && arr[i+3] === arr[i+6]) || (arr[i] === arr[i+4] && arr[i+4] === arr[i+8])) && (arr[i] !== "none")){
                announcementContent.textContent = "WINNER!!!" 
                winner = "yes"
            }
        }
        else if (i === 1){
            if ((arr[i] === arr[i+3] && arr[i+3] === arr[i+6]) && arr[i] !== "none"){
                announcementContent.textContent = "WINNER!!!"
                winner = "yes"
            }
        }
        else if (i === 2){
            if (((arr[i] === arr[i+2] && arr[i+2] === arr[i+4]) || (arr[i] === arr[i+3] && arr[i+3] === arr[i+6])) && arr[i] !== "none"){
                announcementContent.textContent = "WINNER!!!"
                winner = "yes"
            } 
        }
        else if (i === 3){
            if ((arr[i] === arr[i+1] && arr[i+1] === arr[i+2]) && arr[i] !== "none"){
                announcementContent.textContent = "WINNER!!!"
                winner = "yes"
            }
        }
        else{
            if ((arr[i+2] === arr[i+3] && arr[i+3] === arr[i+4]) && arr[i+2] !== "none"){
                announcementContent.textContent = "WINNER!!!"
                winner = "yes"
            }
        }
    }
}

const gridItems = document.querySelectorAll('.grid-item')

let currentPlayer = playerOne

const newGame = document.querySelectorAll('button')

const announcement = document.querySelector('.announcement')
const announcementContent = document.createElement('div')
announcement.appendChild(announcementContent)
announcementContent.style.fontSize = '32px';
announcementContent.style.fontFamily = 'Times New Roman'

for (let i=0; i<newGame.length; i++){
    newGame[i].addEventListener('click', () => {
        let arr = []
        for (let i=0; i<9; i++){
            arr[i] = "none"
        }
        announcementContent.textContent = "New Game!!! Next Turn: Player 1"
        for (let i=0; i<gridItems.length ; i++){
            gridItems[i].addEventListener('click',() => {
                if (arr[i] === "none" && winner === "no"){
                    if (currentPlayer === playerOne){
                        gameBoard(arr,i,playerOne)
                        announcementContent.textContent = "Next Turn: Player 2"
                    }
                    else{
                        gameBoard(arr,i,playerTwo)
                        announcementContent.textContent = "Next Turn: Player 1"
                    }
                    if (currentPlayer === playerOne){
                        currentPlayer = playerTwo
                    }
                    else{
                        currentPlayer = playerOne
                    }
                    game(arr, winner)
                }
            })
        }
    })
}




