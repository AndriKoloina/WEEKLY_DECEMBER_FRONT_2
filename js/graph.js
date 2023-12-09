var canvas = document.getElementById("myCanvas")
var context = canvas.getContext("2d")

function dessinerCercle(x, y, rayon ,a,color) {
    context.beginPath();
    context.arc(x, y, rayon,10,180)
    context.fillStyle = color
    context.fill();
    context.strokeStyle = "rgba(27, 55, 100, 1)"
    context.lineWidth = a
    context.stroke()
}
function dessinerRectangleIncline(x, y, angle,a,b) {
    var largeur = a
    var hauteur = b
    var angleEnRadians = (angle * Math.PI) / 180;

    context.save()
    context.translate(x, y)
    context.rotate(angleEnRadians) 

    context.beginPath();
    context.rect(0, 0, largeur, hauteur)
    context.fillStyle = "rgba(27, 55, 100, 1)"
    context.fill()
    context.strokeStyle = "rgba(27, 55, 100, 1)"
    context.lineWidth = 3
    context.stroke()
    context.restore()
}
function dessinerDemiCercleIncline(x, y, rayon, angle,color) {
    
    var angleEnRadians = (angle * Math.PI) / 180

    context.save()
    context.translate(x, y)
    context.rotate(angleEnRadians)

    context.beginPath()
    context.arc(0, 0, rayon, 0, Math.PI, false)
    context.fillStyle = color
    context.fill()
    context.strokeStyle = color
    context.lineWidth = 3
    context.stroke()

    context.restore()
}


context.beginPath();
dessinerRectangleIncline(30,130,0,100,1)
context.fillStyle = "rgba(27, 55, 100, 1)"
dessinerCercle(20, 70, 12,3,"white")
context.fillStyle = "rgba(27, 55, 100, 1)"
context.moveTo(80,128) 
context.lineTo(30, 82)
context.lineWidth = 5
context.stroke()

context.beginPath()
dessinerCercle(20, 70, 5,1,"rgba(27, 55, 100, 1)")
context.moveTo(134,24) 
context.lineTo(35, 65)
context.lineWidth = 3
context.stroke()

context.beginPath()
dessinerRectangleIncline(140, 10, 45,15,10)
context.stroke()

    context.beginPath()
    dessinerDemiCercleIncline(165, 50, 30,150,"rgba(27, 55, 100, 1)" )
    dessinerDemiCercleIncline(169, 50, 10,-34,"rgba(255, 202, 66, 0.9)")
    context.stroke()