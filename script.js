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
        console.log(playerOne.marker)
    }
}


const playerOne = new player("adarsh")
const playerTwo = new player("ayana")

