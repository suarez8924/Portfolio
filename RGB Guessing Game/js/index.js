
var dificulty = 6
var colors = []
var pickedColor

var squares = document.querySelectorAll('.square')
var colorDisplay = document.getElementById('colorDisplay')
var messageDisplay = document.getElementById('message')
var header = document.getElementById('header')
var resetButton = document.getElementById('reset')
var modeButton = document.querySelectorAll('.mode')

init()

function init(){
    setupModeButtons()
    setupSquares()
    resetGame()
}
function setupModeButtons(){
    for(var i=0; i< modeButton.length;i++){
        modeButton[i].addEventListener('click',function(){
            modeButton[0].classList.remove('selected')
            modeButton[1].classList.remove('selected')
            this.classList.add('selected')
            this.textContent === 'Easy' ? dificulty = 3: dificulty = 6
            // if(this.textContent === 'Easy'){
            //     dificulty = 3
            // }else if(this.textContent === 'Hard'){
            //     dificulty = 6
            // }
            resetGame()
        })
    }
}
function setupSquares(){
    for(var i=0;i<squares.length;i++){
        //add click listeners to squares
        squares[i].addEventListener('click', function(){
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor
            //compare color to pickedColor
            if(clickedColor === pickedColor){
                messageDisplay.textContent = 'Correct!'
                changeColor(clickedColor)
                header.style.backgroundColor = pickedColor
                resetButton.textContent = 'Play again?'
            }else{
                this.style.backgroundColor = '#232323'
                messageDisplay.textContent = 'Try again'
            }
        })
    }
}
function resetGame(){
    colors = generateRandomColors(dificulty)
    resetButton.textContent = 'New Colors'
    messageDisplay.textContent = ''
    pickedColor = pickColor()
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor
    //change colors of square
    for(var i=0;i<squares.length;i++){
        //add initial colors to squares
        if(colors[i]){
            squares[i].style.display = 'block'
            squares[i].style.backgroundColor = colors[i]
        }else{
            squares[i].style.display = 'none'
        }
        
    }
    header.style.backgroundColor = 'steelblue'
}
resetButton.addEventListener('click',function(){
    
    
    
    resetGame()
})

for(var i=0; i< modeButton.length;i++){
    modeButton[i].addEventListener('click',function(){
        modeButton[0].classList.remove('selected')
        modeButton[1].classList.remove('selected')
        this.classList.add('selected')
        this.textContent === 'Easy' ? dificulty = 3: dificulty = 6
        // if(this.textContent === 'Easy'){
        //     dificulty = 3
        // }else if(this.textContent === 'Hard'){
        //     dificulty = 6
        // }

        resetGame()
    })
}

function changeColor(color){
    //loop trough all squares
    for(var i=0 ; i<squares.length ; i++){
        //change each color to match de given color
        squares[i].style.backgroundColor = color
    }
}
function pickColor(){
    //indice aleatorio para el número de bloques
    var random = Math.floor(Math.random()*colors.length)
    return colors[random]
}

function generateRandomColors(numberOfColors){
    //make an array
    var arr = [] 
    //repean numberOfColors times
    for(var i = 0 ; i<numberOfColors ; i++){
        //get random color and push to array
        arr.push(randomColor())
    }
    //return array
    return arr
}   

function randomColor(){
    var randomRed = Math.floor(Math.random()*256)
    var randomGreen = Math.floor(Math.random()*256)
    var randomBlue = Math.floor(Math.random()*256)
    
    return 'rgb('+randomRed + ', ' + randomGreen + ', ' + randomBlue + ')'
}