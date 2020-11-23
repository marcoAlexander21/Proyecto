var l = document.getElementById("leyeCan");
var lc = l.getContext("2d");
var imgl = new Image();
imgl.src = "imagenes/serpiente.png";
imgl.onload = function()
{
    lc.drawImage(imgl, 50, 0)
}