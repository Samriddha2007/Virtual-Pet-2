var dog,happyDog;
var dogSprite;
var database;
var foodS,foodStock;
var time;
var thing,thing2;
var foodObj;
var over,timeOver;
var lastFed, FeedTime, fedTime;

function preload()
{
  dog = loadImage("Dog.png");
  happyDog = loadImage("happydog.png");
}

function setup()
{
  createCanvas(1000, 500);
    thing = 0;
    thing2 = 0;
    time = 1;
    over = 1;

    database = firebase.database();
  
   dogSprite = createSprite(750,250,50,50);
   dogSprite.addImage("dogImage",dog);
   dogSprite.scale = 0.2;

   foodStock = database.ref('Food');
   foodStock.on("value",readStock);

   fedTime = database.ref('lastFed');
   fedTime.on("value",function(data)
   {
     lastFed = data.val();
   })

   

   foodObj = new Food();

   
  invisibleGround = createSprite(650,330,400,10);
  invisibleGround.visible = false;
}


function draw()
{  
  background(46, 139, 87);
  drawSprites();

   


  dogSprite.visible = false;

  if(time == 0)
  {
    dogSprite.visible = true;
  }
  
  dogSprite.velocityY = dogSprite.velocityY + 0.5;
  dogSprite.collide(invisibleGround);

  foodObj.display();

  if(time == 0)
  {
  foodObj.display1();
  }


  if(foodS <= 0)
  {
    foodS = 0;
    over = 0;
  }

  if(over == 0)
  {
      textSize(60);
      fill("red");
      text("WARNING: YOUR FOOD IS ZERO!",30,200);
      text("PLEASE BUY MORE FOOD!",150,250);
      over = 1;
  }

  fill(255,255,254);
  textSize(25);

  if(time == 0)
  {
  
  if(lastFed >= 12)
  {
    text("Last Feed : " + lastFed % 12 + " PM",350,50);
  }
  else if(lastFed == 0)
  {
    text("Last Feed : 12 AM",350,50);
  }
  else 
  {
    text("Last Feed : " + lastFed + " AM",350,50);
  }
  }
}

function readStock(data)
{
  foodS = data.val();
}
function writeStock(x)
{
  database.ref('/').update({
  Food: x
  })
}

function writeStock1(x)
{
  database.ref('/').update({
  lastFed: x
  })
}



