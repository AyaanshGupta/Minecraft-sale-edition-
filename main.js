var canvas = new fabric.Canvas('myCanvas');

p_x=10;
p_y=10;

b_w=30;
b_h=30;

var p_o="";
var b_o="";

function player_update() {

fabric.Image.fromURL("player.png", function(Img){

 p_o = Img;
 p_o.scaleToWidth(150);
 p_o.scaleToHeight(140);
 p_o.set({
    top:p_y, 
    left:p_x
 });

 canvas.add(p_o);
});

}

function new_image(get_image) {

    fabric.Image.fromURL(get_image, function(Img){
    
     b_o = Img;
     b_o.scaleToWidth(b_w);
     b_o.scaleToHeight(b_h);
     b_o.set({
        top:p_y, 
        left:p_x
     });
    
     canvas.add(b_o);
    });
    
    }
    

    window.addEventListener("keydown", my_keydown);

    function my_keydown(e) {

      kp = e.keyCode;
      if(e.shiftKey==true && kp=='80'){
       console.log("p and shift pressed together");
         b_w = b_w + 10;
         b_h = b_h + 10;
         document.getElementById("current_width").innerHTML = b_w;
         document.getElementById("current_height").innerHTML = b_h;
      }


      if(e.shiftKey==true && kp=='77'){
         console.log("m and shift pressed together");
           b_w = b_w - 10;
           b_h = b_h - 10;
           document.getElementById("current_width").innerHTML = b_w;
           document.getElementById("current_height").innerHTML = b_h;
        }


        if(kp == '38') {
         up();
         console("up");
        }
        if(kp == '40') {
         down();
         console("down");
        }
        if(kp == '37') {
         left();
         console("left");
        }
        if(kp == '39') {
         right();
         console("right");
        }

        if(kp == '87') {
       new_image('wall.jpg');
         console("w");
        }
        if(kp == '71') {
         new_image('ground.jpg');
           console("g");
          }
         if(kp == '76') {
            new_image('light_green.png');
              console("l");
             }
    if(kp == '84') {
       new_image('trunk.jpg');
         console("t");
                }   
                if(kp == '82') {
                  new_image('roof.jpg');
                    console("r");
                   } 
                   if(kp == '89') {
                     new_image('yellow_wall.png');
                       console("y");
                      }    
                      if(kp == '68') {
                        new_image('dark_green.png');
                          console("d");
                         }    
                         if(kp == '85') {
                           new_image('unique.png');
                             console("u");
                            }   
                            if(kp == '67') {
                              new_image('cloud.jpg');
                                console("c");
                               }        
    }



function up()  {

  if(p_y > 0){

    p_y = p_y - b_h;
    console.log("when up arrow key pressed, x="+p_x+", y="+p_y);
    canvas.remove(p_o);
    player_update();

  }
}  

function down()  {

  if(p_y < 500){

    p_y = p_y + b_h;
    console.log("when down arrow key pressed, x="+p_x+", y="+p_y);
    canvas.remove(p_o);
    player_update();
    
  }
}  

function left()  {

  if(p_x > 0){

    p_x = p_x - b_w;
    canvas.remove(p_o);
    player_update();
    
  }
}  

function right()  {

  if(p_x < 800){

    p_x = p_x + b_w;
    canvas.remove(p_o);
    player_update();
    
  }
}  