document.addEventListener('keyup', dibujarTeclado);
var li = document.getElementById('flechitas');
var lineas = li.getContext('2d');
var x = 150;
var y = 150;    

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle =  color;
    lienzo.lineWidth = 3 ;
    lienzo.moveTo(x_inicial,y_inicial);
    lienzo.lineTo(x_final,y_final);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento)
{
    var colorcito = '#3E7184';
    var movimiento = 10;

    switch(evento.keyCode)
    {
        case teclado.UP:
            dibujarLinea(colorcito, x, y, x, y -movimiento, loro);
            y = y - movimiento;
        break;
        case teclado.DOWN:
            dibujarLinea(colorcito, x, y, x, y + movimiento, loro);
            y = y + movimiento;
        break;
        case teclado.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento , y, loro);
            x = x - movimiento;
        break;
        case teclado.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, loro);
            x = x + movimiento;
        break;
        default:
            alert('otra tecla')
        break
    }
}

var teclado = 
{
    UP: 38,
    DOWN : 40,
    RIGHT: 39,
    LEFT:37
}