class Food
{
    constructor()
    {
         
        
        this.button = createButton('Feed The Dog');
        this.button_dup = createButton('Buy The Food');
        
        this.image = loadImage("Milk.png");
        this.image_dup = loadImage("dog.jpg");
        

        this.input = createInput('');
        this.button_dup_1 = createButton('Enter');
        this.title1 = createElement('h3');
        this.title1.html("Type yor pet's name");
        this.greeting = createElement('h2');
        this.title = createElement('h1');
        this.title.html("Your Own Virtual Pet");
    }

    display()
    {

        this.input.position(750,400);
        this.title1.position(760,355);
        this.button_dup_1.position(800,450);
        this.title.position(700,50);  
           
        if(time == 1)
        {
             image(this.image_dup,380,70,250,250);
        }
    
        if(time == 0)     
        {
            this.button.position(1000,450);
            this.button_dup.position(1100,450);
        }
        else 
        {
            this.button.position(1000,-450);
            this.button_dup.position(1100,-450);

            if(time == 1)
            {
            
            }
        }
        
        this.button.mousePressed(() =>
        {
            foodS = foodS - 1;
            lastFed =  hour();
            writeStock1(lastFed);
            writeStock(foodS);
            dogSprite.addImage("dogImage",happyDog);
            thing2 = 1;
            if(thing2 == 1)
            {
                thing2 = 0;
                
                if(dogSprite.y > 240)
                {
                    dogSprite.velocityY = -10;
                }

            }
            
        }
        )

        this.button_dup.mousePressed(() =>
        {
            foodS = foodS + 1;
            writeStock(foodS);
            dogSprite.addImage("dogImage",dog);
            
            thing = 1;
            if(thing == 1)
            {
                thing = 0;
            }
        }
        )

       

        this.button_dup_1.mousePressed(() =>
        {
            this.input.hide();
            this.button_dup_1.hide();
            this.title1.hide();
            this.title.hide();
            var name = this.input.value();
            this.greeting.html( "" +  name);
            this.greeting.position(1080,360);
            
            time = 0;
        }
        )
    }

    display1()
    {
      var x = 80,y = 50; 
      imageMode(CENTER);
      
      

        for(var i = 0; i < foodS; i++)
        {
            if(i % 10 == 0)
            {
                x = 80;
                y = y + 50;
            }

        x = x + 30;
        image(this.image,x,y,50,50);
        }    
    }

}