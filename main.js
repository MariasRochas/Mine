var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;


blockImageWidth = 30;
blockImageHeight = 30;


var player_object= "";
var block_image_object= "";

function player_update()
{
	fabric.Image.fromURL("jogador.png", function(Img) {
	player_object = Img;
	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({top:player_y,left:player_x});
	canvas.add(player_object);
	});
}

function new_image(getImage)
{
	fabric.Image.fromURL(getImage, function(Img){
		block_image_object = Img;
		block_image_object.scaleToWidth(blockImageWidth);
		block_image_object.scaleToHeight(blockImageHeight);
		block_image_object.set({top:player_y,left:player_x});
		canvas.add(blockImageObject);
	});
}
window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if(e.shiftKey == true && keyPressed == '80')
	{
		console.log("p e shift pressionadas juntas");
		blockImageWidth = blockImageWidth + 10;
		blockImageHeight = blockImageHeight +10;
		document.getElementById("currentWidth").innerHTML = blockImageWidth;
		document.getElementById("currentHeigth").innerHTML = blockImageHeight;
	}
	if(e.shiftKey && keyPressed == '77')
	{
		console.log("m e shift pressionadas juntas")
		blockImageWidth = blockImageWidth - 10;
		blockImageHeight = blockImageHeight - 10;
		document.getElementById("currentWidth").innerHTML = blockImageWidth;
		document.getElementById("currentHeigth").innerHTML = blockImageHeight;
	}
	if(keyPressed == '38')
	{
		up();
		console.log("cima");
	}


	if(keyPressed == '40')
	{
		down();
		console.log("baixo");
	}


	if(keyPressed == '37')
	{
		left();
		console.log("esquerda");
	}


	if(keyPressed == '39')
	{
		right();
		console.log("direita");
	}


	if(keyPressed == '86')
	{
		new_image('verde_claro.png'); 
		console.log("v");
	}
	if(keyPressed == '77')
	{
		new_image('madeira_tronco.jpg'); 
		console.log("m");
	}
	if(keyPressed == '84')
	{
		new_image('telhado.jpg'); 
		console.log("t");
	}
	if(keyPressed == '65')
	{
		new_image('parede_amarela.png'); 
		console.log("a");
	}
	if(keyPressed == '69')
	{
		new_image('verde_escuro.png'); 
		console.log("e");
	}
	if(keyPressed == '85')
	{
		new_image('unico.png'); 
		console.log("u");
	}
	if(keyPressed == '78')
	{
		new_image('nuvem.jpg'); 
		console.log("n");
	}
	
}
function up()
{

	if(player_y <=0)
	{
		player_y = player_y - blockImageHeight;
		console.log("altura da imagem do bloco =" + blockImageHeight);
		console.log("Quando a seta para cima é pressionada, X = " + player_x + " , Y =" +player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function down()
{

	if(player_y >=0)
	{
		player_y = player_y - blockImageHeight;
		console.log("altura da imagem do bloco =" + blockImageHeight);
		console.log("Quando a seta para baixo é pressionada, X = " + player_x + " , Y =" +player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function left()
{
    if(player_x >0)
	{
		player_x = player_x - blockImageWidth;
		console.log("largura da imagem do bloco =" + blockImageWidth);
		console.log("Quando a seta esquerda é pressionada, X =" + player_x + " , Y ="+player_y);
		canvas.remove(player_object);
		player_update();
	}
}
function right()
{
	if(player_x <=850)
	{
		player_x = player_x - blockImageWidth;
		console.log("largura da imagem do bloco =" + blockImageWidth);
		console.log("Quando a seta direita é pressionada, X =" + player_x + " , Y ="+player_y);
		canvas.remove(player_object);
		player_update();
	}
}
