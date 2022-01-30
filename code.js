document.addEventListener("keydown",drawKeyboard)
var frame = document.getElementById("areaOfDraw")
var paper = frame.getContext("2d")
var lineColor = "red"
var xinitial = 150
var yinitial = 150
var yfinal = yinitial
var xfinal = xinitial
var movement = 10
var widthLine = 4

var keys = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
}

function drawKeyboard(data){

    var key = data.keyCode

    if (key == keys.UP){
        yfinal = yfinal - movement
    } else if (key == keys.DOWN){
        yfinal = yfinal + movement
    } else if (key == keys.LEFT){
        xfinal = xfinal - movement
    } else if (key == keys.RIGHT){
        xfinal = xfinal + movement
    }

    drawLine(lineColor,xinitial,yinitial,xfinal,yfinal)

    xinitial = xfinal
    yinitial = yfinal
}

function drawLine(color,xinitial,yinitial,xfinal,yfinal){
    paper.beginPath()
    paper.strokeStyle = color
    paper.lineWidth = widthLine
    paper.moveTo(xinitial,yinitial)
    paper.lineTo(xfinal,yfinal)
    paper.stroke()
    paper.closePath()
}

