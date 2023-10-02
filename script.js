function player(name) {
    this.name = name
    this.weapon = (marker) => {
        if (marker === 'X'){
           playerOne.marker = 'X'
           playerTwo.marker = 'O' 
        }
        else{
            playerOne.marker = 'O'
            playerTwo.marker = 'X'
        }
    }
}


const playerOne = new player("adarsh")
const playerTwo = new player("ayana")

playerOne.weapon('X')

function gameBoard(arr,input,playerNumber) {
    if (playerNumber === playerOne){
        arr[input] = playerOne.marker
    }
    else{
        arr[input] = playerTwo.marker
    }
}


function game(){
    
}