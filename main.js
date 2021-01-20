var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object = "";
var block_image_object = "";

function player_update(){

    fabric.Image.fromURL("player.gif", function(img){
        player_object = img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y, 
            left:player_x
        });
        canvas.add(player_object);

    });

}


function new_image(get_image){

    fabric.Image.fromURL(get_image, function (img){
        block_image_object = img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });

        canvas.add(block_image_object);

    });

}

window.addEventListener("keydown", my_keyDown);

function my_keyDown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);


    if(e.shiftKey == true && keyPressed == '80'){
        console.log("P and Shift are pressed together");
        block_image_height = block_image_height + 10;
        block_image_width = block_image_width + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if(e.shiftKey == true && keyPressed == 77){
        console.log("M and Shift are pressed together");
        block_image_height = block_image_height - 10;
        block_image_width = block_image_width - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    
    if(keyPressed == '38'){
        up();
        console.log("Up");
    }

    if(keyPressed == '40'){
        down();
        console.log("Down");
    }

    if(keyPressed == '37'){
        left();
        console.log("Left");
    }

    if(keyPressed == '39'){
        right();
        console.log("Right");
    }

    if(keyPressed == '72'){
        new_image('head.png');
        console.log("H");
    }

    if(keyPressed == '66'){
        new_image('body.png');
        console.log("B");
    }

    if(keyPressed == '70'){
        new_image('feet.png');
        console.log("F");
    }

    if(keyPressed == '76'){
        new_image('left hand.png');
        console.log("L");
    }

    if(keyPressed == '82'){
        new_image('New Project.jpg');
        console.log("R");
    }

    

}


function up(){

    if (player_y >= 0){
        player_y = player_y - block_image_height;
        console.log("Block image height = " + block_image_height);
        console.log("When up arrow is pressed X = " + player_x + " and Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){

    if(player_y <= 500){
        player_y = player_y + block_image_height;
        console.log("Block image height = " + block_image_height);
        console.log("When down arrow is pressed X = " + player_x + "and Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }

}

function left(){

    if(player_x >= 0){
        player_x = player_x - block_image_width;
        console.log("Block image width = " + block_image_width);
        console.log("When left arrow is pressed X =" + player_x + "and Y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }

}

function right(){

    if(player_x <= 850){
        player_x = player_x + block_image_width;
        console.log("Block image width =" + block_image_width);
        console.log("When right arrow key is pressed X = " + player_x + "and Y = " +player_y);
        canvas.remove(player_object);
        player_update();
    }

}