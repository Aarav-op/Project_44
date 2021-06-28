var iss, spacecraft;
var bg, issimg, scimg;
var hasDocked = false;
var star1
var edges

function preload(){
  bg= loadImage("space.jpg");
  issimg = loadImage("iss.png");
  scimg = loadImage("spacecraft1.png");
  scimg1 = loadImage("spacecraft2.png");
  scimg2= loadImage("spacecraft3.png");
  scimg3= loadImage("spacecraft4.png");
  starimg = loadImage("star.png")
}
function setup() {
  createCanvas(1500, 900);
  spacecraft = createSprite(285,580)
  spacecraft.addImage(scimg)
  spacecraft.scale = 0.15
  iss = createSprite(1000,130)
  iss.addImage(issimg)
  iss.scale = 0.25
  star1 = createSprite(100,100)
  star1.addImage(starimg)
  star1.scale=0.1

  star2 = createSprite(305,178)
  star2.addImage(starimg)
  star2.scale=0.1

  star3 = createSprite(308,73)
  star3.addImage(starimg)
  star3.scale=0.1

  star4 = createSprite(79,304)
  star4.addImage(starimg)
  star4.scale=0.1

  star5 = createSprite(191,418)
  star5.addImage(starimg)
  star5.scale=0.1

  star6 = createSprite(500,500)
  star6.addImage(starimg)
  star6.scale=0.1

  star7 = createSprite(600,600)
  star7.addImage(starimg)
  star7.scale=0.1

  star8 = createSprite(700,700)
  star8.addImage(starimg)
  star8.scale=0.1

  star9= createSprite(1000,1000)
  star9.addImage(starimg)
  star9.scale=0.1

  star10 = createSprite(430,380)
  star10.addImage(starimg)
  star10.scale=0.1

  star11 = createSprite(200,200)
  star11.addImage(starimg)
  star11.scale=0.1

  star12 = createSprite(300,300)
  star12.addImage(starimg)
  star12.scale=0.1

  star13 = createSprite(500,100)
  star13.addImage(starimg)
  star13.scale=0.1

  star14 = createSprite(700,100)
  star14.addImage(starimg)
  star14.scale=0.1

  star15 = createSprite(800,100)
  star15.addImage(starimg)
  star15.scale=0.1

  star16 = createSprite(900,100)
  star16.addImage(starimg)
  star16.scale=0.1

  star17 = createSprite(800,400)
  star17.addImage(starimg)
  star17.scale=0.1

  star18 = createSprite(500,600)
  star18.addImage(starimg)
  star18.scale=0.1

  star19 = createSprite(538,236)
  star19.addImage(starimg)
  star19.scale=0.1

  star20 = createSprite(627,345)
  star20.addImage(starimg)
  star20.scale=0.1

  star21 = createSprite(971,462)
  star21.addImage(starimg)
  star21.scale=0.1

  star22 = createSprite(820,581)
  star22.addImage(starimg)
  star22.scale=0.1

  star23 = createSprite(101,520)
  star23.addImage(starimg)
  star23.scale=0.1
    
  
  
  
  
  
  
  
}
function draw() {
  background(bg);
  edges = createEdgeSprites()
  
  spacecraft.addImage(scimg);
  if(!hasDocked){
    spacecraft.x+=random(-1,1)
    if(keyDown("UP_ARROW")){
      spacecraft.y-=4
    }
    if(keyDown(LEFT_ARROW)){
      spacecraft.x-=4
      spacecraft.addImage(scimg3)
    }
    if(keyDown(RIGHT_ARROW)){
      spacecraft.x+=4
      spacecraft.addImage(scimg2)
    }
    if(keyDown("DOWN_ARROW")){
      spacecraft.y+=4
    }
  }
  if(spacecraft.isTouching(star1)){
    star1.destroy()
  }
  if(spacecraft.isTouching(star2)){
    star2.destroy()
  }
  if(spacecraft.isTouching(star3)){
    star3.destroy()
  }
  if(spacecraft.isTouching(star4)){
    star4.destroy()
  }
  if(spacecraft.isTouching(star5)){
    star5.destroy()
  }
  if(spacecraft.isTouching(star6)){
    star6.destroy()
  }
  if(spacecraft.isTouching(star7)){
    star17destroy()
  }
  if(spacecraft.isTouching(star8)){
    star8.destroy()
  }
  if(spacecraft.isTouching(star9)){
    star9.destroy()
  }
  if(spacecraft.isTouching(star10)){
    star10.destroy()
  }
  if(spacecraft.isTouching(star11)){
    star11.destroy()
  }
  if(spacecraft.isTouching(star12)){
    star12.destroy()
  }
  if(spacecraft.isTouching(star13)){
    star13.destroy()
  }
  if(spacecraft.isTouching(star14)){
    star14.destroy()
  }
  if(spacecraft.isTouching(star15)){
    star15.destroy()
  }
  if(spacecraft.isTouching(star16)){
    star16.destroy()
  }
  if(spacecraft.isTouching(star17)){
    star17.destroy()
  }
  if(spacecraft.isTouching(star18)){
    star18.destroy()
  }
  if(spacecraft.isTouching(star19)){
    star19.destroy()
  }
  if(spacecraft.isTouching(star20)){
    star20.destroy()
  }
  if(spacecraft.isTouching(star21)){
    star21.destroy()
  }
  if(spacecraft.isTouching(star22)){
    star22.destroy()
  }
  if(spacecraft.isTouching(star23)){
    star23.destroy()
  }
  
  
  
  
  
  
  

  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-1000)){
    hasDocked = true;
    textSize(25);
    fill("white")
    text("Docking Successful!", 200, 300);
  }
  drawSprites();

textSize(25)
fill("white")
text(mouseX+","+mouseY,mouseX,mouseY)
}