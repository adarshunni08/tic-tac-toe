function player(name) {
    this.name = name
    this.weapon = (marker) => {
        this.marker = marker
    }
 
}

function gameBoard(arr,input,playerNumber) {
    if (playerNumber === playerOne){
        arr[input] = playerOne.marker
    }
    else{
        arr[input] = playerTwo.marker
    }

}

function game(arr,winner){
    for (let i=0; i<5; i++){
        if (i === 0 ){
            if (((arr[i] === arr[i+1] && arr[i+1] === arr[i+2]) || (arr[i] === arr[i+3] && arr[i+3] === arr[i+6]) || (arr[i] === arr[i+4] && arr[i+4] === arr[i+8])) && (arr[i] !== "none")){
                announcementContent.textContent = "WINNER!!!"     
                winner = "found"
                gameFinished = "yes"
            }       
        }
        else if (i === 1){
            if ((arr[i] === arr[i+3] && arr[i+3] === arr[i+6]) && arr[i] !== "none"){
                announcementContent.textContent = "WINNER!!!"
                winner = "found"
                gameFinished = "yes"
            }
        }
        else if (i === 2){
            if (((arr[i] === arr[i+2] && arr[i+2] === arr[i+4]) || (arr[i] === arr[i+3] && arr[i+3] === arr[i+6])) && arr[i] !== "none"){
                announcementContent.textContent = "WINNER!!!"
                winner = "found"
                gameFinished = "yes"
            } 
        }
        else if (i === 3){
            if ((arr[i] === arr[i+1] && arr[i+1] === arr[i+2]) && arr[i] !== "none"){
                announcementContent.textContent = "WINNER!!!"
                winner = "found"
                gameFinished = "yes"
            }
        }
        else{
            if ((arr[i+2] === arr[i+3] && arr[i+3] === arr[i+4]) && arr[i+2] !== "none"){
                announcementContent.textContent = "WINNER!!!"
                winner = "found"
                gameFinished = "yes"
            }
        }
    }
    let found = "false"
    for (let i=0; i<arr.length; i++){
        if (arr[i] === "none"){
            found = "true"
            break
        }
    }
    if (found === "false" && winner === "notFound"){
        announcementContent.textContent = "It's a TIE !!!"
    }
    
}
    

const playerOne = new player("Player 1")
const playerTwo = new player("Player 2")

const gridItems = document.querySelectorAll('.grid-item')

const newGame = document.querySelectorAll('button')

const announcement = document.querySelector('.announcement')
const announcementContent = document.createElement('div')
announcement.appendChild(announcementContent)
announcementContent.textContent = "Click play to start !!!"
announcementContent.style.fontSize = '32px';
announcementContent.style.fontFamily = 'Times New Roman'

let gameFinished = "no"
let arr = []
let currentPlayer = playerOne
for (let i=0; i<newGame.length; i++){
    newGame[i].addEventListener('click', () => {
        for (let i=0; i<9; i++){
            arr[i] = "none"
            gridItems[i].style.backgroundColor = 'white'
        }

        currentPlayer = playerOne
        playerOne.weapon('X')
        playerTwo.weapon('O')
        let winner = "notFound"
        announcementContent.textContent = "New Game!!! Player 1, it's your turn."

        gameFinished = "no"

        for (let i=0; i<gridItems.length ; i++){
            gridItems[i].addEventListener('click',() => {
                if (arr[i] === "none" && gameFinished === "no"){
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
                        gridItems[i].style.backgroundColor = 'red'

                    }
                    else{
                        currentPlayer = playerOne
                        gridItems[i].style.backgroundColor = 'blue'
                    }
                    game(arr,winner)
                }
            })
        }
    })
}





