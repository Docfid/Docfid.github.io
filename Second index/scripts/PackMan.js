var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext("2d");
var CANVAS_WIDTH = 1800;
var CANVAS_HEIGHT = 900;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
	function drawPackmenFigure(canvasContext, x, y, radius, color, endAngle)
	{
    		var startPoint = {
       		x: x + Math.cos(0) * radius,
        	y: y + Math.sin(0) * radius
    	};
    	var endPoint = {
        	x: x + Math.cos(endAngle) * radius,
        	y: y + Math.sin(endAngle) * radius
    	};
    	canvasContext.fillStyle = color;
    	canvasContext.beginPath();
    // рисуем вырез рта
    	canvasContext.moveTo(x, y);
    	canvasContext.lineTo(startPoint.x, startPoint.y);
    	canvasContext.moveTo(x, y);
    	canvasContext.lineTo(endPoint.x, endPoint.y);
    // рисуем тело
    	canvasContext.arc(x, y, radius, endAngle, 0, false);
    	canvasContext.fillStyle = color;
    	canvasContext.strokeStyle = color;
    	canvasContext.fill();
    	canvasContext.closePath();
	};
